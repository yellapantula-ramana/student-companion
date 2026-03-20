import { useState, useEffect } from "react";
import {
  BookOpen,
  Lightbulb,
  Target,
  BrainCircuit,
  FileText,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ChevronLeft,
  Download,
  BarChart3,
  type LucideIcon
} from "lucide-react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "katex/dist/katex.min.css";
import { useAuth } from "./AuthProvider";
import { getOrGenerateLearningPath, getOrGenerateSyllabus } from "../services/contentService";

type Stage = "INTRO" | "CONCEPT" | "GUIDED_PRACTICE" | "ADAPTIVE_PRACTICE" | "EXAM" | "ANALYSIS" | "REVISION";

interface ChapterState {
  student_id: string;
  subject: string;
  chapter: string;
  subtopics: string[];
  current_subtopic_index: number;
  current_stage: Stage;
  mastery_level: number;
  history: { stage: Stage; score?: number; timestamp: string }[];
  content_cache?: Record<string, string>;
  updatedAt: string;
}

const STAGES: { id: Stage; label: string; icon: LucideIcon; sectionHeader?: string }[] = [
  { id: "INTRO", label: "Introduction", icon: BookOpen, sectionHeader: "1. Concept Introduction" },
  { id: "CONCEPT", label: "Concept Explanations", icon: Lightbulb, sectionHeader: "3. Concept Explanations" },
  { id: "GUIDED_PRACTICE", label: "Guided Examples", icon: Target, sectionHeader: "4. Guided Examples" },
  { id: "ADAPTIVE_PRACTICE", label: "Practice Questions", icon: BrainCircuit, sectionHeader: "5. Practice Questions" },
  { id: "EXAM", label: "Exam Preparation", icon: FileText, sectionHeader: "6. Exam-Oriented Preparation" },
  { id: "ANALYSIS", label: "Performance Analysis", icon: BarChart3 }, // No sectionHeader - shows full content
  { id: "REVISION", label: "Revision Notes", icon: RefreshCw, sectionHeader: "7. Revision Notes" },
];

const SUBJECTS = ["Science", "Mathematics", "English", "Computer Science"];
const makeId = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '_');

export function ChapterFlow() {
  const { user } = useAuth();

  // Selection State
  const [activeSubject, setActiveSubject] = useState(SUBJECTS[0]);
  const [syllabus, setSyllabus] = useState<any>(null);
  const [isLoadingSyllabus, setIsLoadingSyllabus] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<any | null>(null);

  // Flow State
  const [state, setState] = useState<ChapterState | null>(null);
  const [aiContent, setAiContent] = useState<string>("");
  const [learningPathContent, setLearningPathContent] = useState<string>("");
  const [learningPathPdfUrl, setLearningPathPdfUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isGeneratingPath, setIsGeneratingPath] = useState(false);
  const [generationProgress, setGenerationProgress] = useState({ status: '', percent: 0 });

  // Fetch Syllabus for Selection
  useEffect(() => {
    if (selectedChapter) return; // Don't fetch if we're already in a chapter

    const fetchSyllabus = async () => {
      setIsLoadingSyllabus(true);
      try {
        const data = await getOrGenerateSyllabus(activeSubject);
        setSyllabus(data);
      } catch (error) {
        console.error("Failed to fetch syllabus:", error);
      } finally {
        setIsLoadingSyllabus(false);
      }
    };

    fetchSyllabus();
  }, [activeSubject, selectedChapter]);

  // Load state when a chapter is selected AND generate learning path once
  useEffect(() => {
    if (!user || !selectedChapter) return;

    setIsInitializing(true);

    // Initialize default state (removed Firebase dependency)
    const initialState: ChapterState = {
      student_id: user.uid,
      subject: activeSubject,
      chapter: selectedChapter.title,
      subtopics: selectedChapter.subtopics && selectedChapter.subtopics.length > 0
        ? selectedChapter.subtopics
        : ["Introduction", "Core Concepts", "Summary"],
      current_subtopic_index: 0,
      current_stage: "INTRO",
      mastery_level: 0,
      history: [],
      updatedAt: new Date().toISOString()
    };

    setState(initialState);
    setIsInitializing(false);

    // Generate learning path ONCE when chapter is selected
    const generateLearningPathOnce = async () => {
      if (isGeneratingPath || learningPathContent) return; // Already generating or generated

      setIsGeneratingPath(true);
      setGenerationProgress({ status: 'Generating learning path...', percent: 0 });

      try {
        const result = await getOrGenerateLearningPath(
          activeSubject,
          selectedChapter.title,
          (status, percent) => setGenerationProgress({ status, percent })
        );

        setLearningPathContent(result.content || '');
        setLearningPathPdfUrl(result.pdfUrl || '');
      } catch (error: any) {
        console.error("Failed to generate learning path:", error);
      } finally {
        setIsGeneratingPath(false);
        setGenerationProgress({ status: '', percent: 0 });
      }
    };

    generateLearningPathOnce();
  }, [user, selectedChapter, activeSubject]);

  // Helper to escape special regex characters
  const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Helper to extract section content from the pre-generated learning path
  const extractStageContent = (currentState: ChapterState, content: string) => {
    setIsLoading(true);
    setAiContent("");

    if (!content) {
      setAiContent("### Learning path is being generated...\n\nPlease wait a moment while we create your personalized learning content.");
      setIsLoading(false);
      return;
    }

    try {
      const fullMarkdown = content;
      const stageConfig = STAGES.find(s => s.id === currentState.current_stage);

      if (!stageConfig) {
        setAiContent(fullMarkdown);
        setIsLoading(false);
        return;
      }

      // Handle ANALYSIS stage - create a summary view
      if (stageConfig.id === "ANALYSIS") {
        // Extract summary from different sections for performance analysis
        const sections = [
          { name: "Concept Introduction", pattern: /##\s*1\.\s*Concept Introduction([\s\S]*?)(?=\n##\s*\d+\.|$)/i },
          { name: "Key Concepts", pattern: /##\s*3\.\s*Concept Explanations([\s\S]*?)(?=\n##\s*\d+\.|$)/i },
          { name: "Practice Summary", pattern: /##\s*5\.\s*Practice Questions([\s\S]*?)(?=\n##\s*\d+\.|$)/i },
        ];

        let analysisContent = `## Performance Analysis\n\n`;
        analysisContent += `### 📊 Learning Progress Overview\n\n`;
        analysisContent += `This section provides a summary of your learning journey for **${currentState.chapter}**.\n\n`;

        // Calculate progress based on completed stages
        const currentStageIndex = STAGES.findIndex(s => s.id === currentState.current_stage);
        const progressPercent = Math.round((currentStageIndex / (STAGES.length - 1)) * 100);

        analysisContent += `**Overall Progress:** ${progressPercent}%\n\n`;
        analysisContent += `**Current Stage:** ${stageConfig.label}\n\n`;
        analysisContent += `**Mastery Level:** ${currentState.mastery_level}%\n\n`;

        analysisContent += `---\n\n`;
        analysisContent += `### 📝 Chapter Summary\n\n`;

        // Try to extract key points from concept explanations
        const conceptMatch = fullMarkdown.match(/##\s*3\.\s*Concept Explanations([\s\S]*?)(?=\n##\s*\d+\.|$)/i);
        if (conceptMatch) {
          // Extract just the subheadings (### level)
          const subheadings = conceptMatch[1].match(/###\s+(.+)/g);
          if (subheadings) {
            analysisContent += `**Key Topics Covered:**\n`;
            subheadings.slice(0, 5).forEach(heading => {
              const cleanHeading = heading.replace(/###\s*/, '').trim();
              analysisContent += `- ${cleanHeading}\n`;
            });
            analysisContent += `\n`;
          }
        }

        // Add revision notes preview if available
        const revisionMatch = fullMarkdown.match(/##\s*7\.\s*Revision Notes([\s\S]*?)(?=\n##\s*\d+\.|$)/i);
        if (revisionMatch) {
          analysisContent += `### 📝 Revision Notes Preview\n\n`;
          // Get first 500 chars of revision section
          const preview = revisionMatch[1].slice(0, 500).replace(/\n+/g, '\n').trim();
          analysisContent += preview + (revisionMatch[1].length > 500 ? '...' : '') + '\n\n';
        }

        analysisContent += `---\n\n`;
        analysisContent += `### 💡 Recommendations\n\n`;
        analysisContent += `- Review the **Concept Explanations** section for any unclear topics\n`;
        analysisContent += `- Practice more questions in the **Practice Questions** section\n`;
        analysisContent += `- Check the **Revision Notes** for quick recap before exams\n`;
        analysisContent += `- Download the full PDF for offline study\n\n`;

        setAiContent(analysisContent);
        setIsLoading(false);
        return;
      }

      // Handle regular stages with section headers
      if (stageConfig.sectionHeader) {
        // Extract the header text (remove the number prefix)
        const headerText = stageConfig.sectionHeader.replace(/^\d+\.\s*/, '').trim();
        const escapedHeaderText = escapeRegex(headerText);

        // Match from the section header until the next numbered section header (## digit.) or end of string
        // The pattern looks for: ## [optional: digit.] headerText ... until next ## digit. or end
        const sectionRegex = new RegExp(
          `(##\\s*(?:\\d+\\.\\s*)?${escapedHeaderText}[\\s\\S]*?)(?=\\n##\\s*\\d+\\.|$)`,
          'i'
        );

        const match = fullMarkdown.match(sectionRegex);

        if (match && match[1]) {
          setAiContent(match[1].trim());
        } else {
          // Fallback 1: Try matching with just the header text (case insensitive)
          const fallbackRegex1 = new RegExp(
            `(##\\s+[^\\n]*${escapedHeaderText}[^\\n]*[\\s\\S]*?)(?=\\n##\\s*\\d+\\.|$)`,
            'i'
          );
          const fallbackMatch1 = fullMarkdown.match(fallbackRegex1);

          if (fallbackMatch1 && fallbackMatch1[1]) {
            setAiContent(fallbackMatch1[1].trim());
          } else {
            // Fallback 2: Try to find any heading containing the key words
            const keyWords = headerText.split(' ').slice(0, 2).join(' ');
            const fallbackRegex2 = new RegExp(
              `(##\\s+[^\\n]*${escapeRegex(keyWords)}[^\\n]*[\\s\\S]*?)(?=\\n##\\s*\\d+\\.|$)`,
              'i'
            );
            const fallbackMatch2 = fullMarkdown.match(fallbackRegex2);

            if (fallbackMatch2 && fallbackMatch2[1]) {
              setAiContent(fallbackMatch2[1].trim());
            } else {
              // Final fallback: show error with available sections
              const availableSections = fullMarkdown.match(/##\s*\d+\.\s*.+/g) || [];
              const sectionList = availableSections.map(s => `- ${s}`).join('\n');

              setAiContent(
                `### Content Section Not Found\n\n` +
                `Could not extract the **"${headerText}"** section from the learning path.\n\n` +
                `**Available sections in this chapter:**\n${sectionList || 'No numbered sections found'}\n\n` +
                `---\n\n` +
                `*Showing full content below:*\n\n${fullMarkdown.slice(0, 2000)}...`
              );
            }
          }
        }
      } else {
        // No section header defined - show full content
        setAiContent(fullMarkdown);
      }
    } catch (error: any) {
      console.error("Error extracting content:", error);
      setAiContent(
        `### Error Loading Content\n\n` +
        `Failed to extract content from learning path.\n\n` +
        `**Details:** ${error.message || String(error)}\n\n` +
        `Please try refreshing the page or select a different stage.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch content when state changes
  useEffect(() => {
    if (state && selectedChapter) {
      extractStageContent(state, learningPathContent);
    }
  }, [state?.current_stage, selectedChapter?.title, learningPathContent]);

  // Transition Logic Engine
  const handleNext = async () => {
    if (!state || !user) return;

    const newState = { ...state };
    newState.history.push({ stage: state.current_stage, timestamp: new Date().toISOString() });
    newState.updatedAt = new Date().toISOString();

    switch (state.current_stage) {
      case "INTRO":
        newState.current_stage = "CONCEPT";
        break;
      case "CONCEPT":
        newState.current_stage = "GUIDED_PRACTICE";
        break;
      case "GUIDED_PRACTICE":
        newState.current_stage = "ADAPTIVE_PRACTICE";
        break;
      case "ADAPTIVE_PRACTICE":
        newState.current_stage = "EXAM";
        break;
      case "EXAM":
      case "ANALYSIS":
        newState.current_stage = "REVISION";
        break;
      case "REVISION":
        alert("Chapter Completed Successfully!");
        setSelectedChapter(null); // Go back to selection
        return;
    }

    // Update local state only (removed Firebase)
    setState(newState);
  };

  const handleStageSelect = async (stageId: Stage) => {
    if (!state || !user) return;
    if (state.current_stage === stageId) return;

    const newState = { ...state };
    newState.history.push({ stage: state.current_stage, timestamp: new Date().toISOString() });
    newState.current_stage = stageId;
    newState.updatedAt = new Date().toISOString();

    // Update local state only (removed Firebase)
    setState(newState);
  };

  // Render Selection Screen if no chapter is selected
  if (!selectedChapter) {
    return (
      <div className="flex flex-col h-full bg-slate-50">
        <div className="p-4 lg:p-6 xl:p-8 border-b border-slate-200 bg-white">
          <h1 className="text-xl lg:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" />
            Interactive Learning Path
          </h1>
          <p className="text-slate-500 mt-1 lg:mt-2 text-sm lg:text-base">Select a subject and chapter to start your personalized learning journey.</p>

          <div className="flex gap-2 mt-4 lg:mt-6 overflow-x-auto pb-2">
            {SUBJECTS.map((subject) => (
              <button
                key={subject}
                onClick={() => setActiveSubject(subject)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeSubject === subject
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 lg:p-6 xl:p-8">
          {isLoadingSyllabus ? (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400 space-y-4">
              <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
              <p>Loading {activeSubject} chapters...</p>
            </div>
          ) : syllabus ? (
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {syllabus.chapters?.map((chapter: any, index: number) => (
                <div
                  key={index}
                  onClick={() => setSelectedChapter(chapter)}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 lg:p-6 cursor-pointer hover:shadow-md hover:border-indigo-300 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3 lg:mb-4 gap-3">
                    <span className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${chapter.difficulty === 'Hard' ? 'bg-rose-100 text-rose-700' :
                      chapter.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                      {chapter.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{chapter.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                    {chapter.subtopics?.join(" • ")}
                  </p>
                  <div className="flex items-center text-indigo-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Start Learning <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-slate-500 mt-10">
              Failed to load chapters.
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render Learning Flow if a chapter is selected
  if (isInitializing || !state) {
    return (
      <div className="flex h-full items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="flex h-full bg-slate-50">
      {/* Left Sidebar: Progress Stepper */}
      <div className="w-80 bg-white border-r border-slate-200 p-6 overflow-y-auto flex flex-col">
        <button
          onClick={() => setSelectedChapter(null)}
          className="flex items-center text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Chapters
        </button>

        <h2 className="text-lg font-bold text-slate-900 mb-8">{state.chapter}</h2>

        <div className="space-y-6 flex-1">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = state.current_stage === stage.id;
            const isPast = STAGES.findIndex(s => s.id === state.current_stage) > index;

            return (
              <div key={stage.id} className="relative flex items-start gap-4">
                {index < STAGES.length - 1 && (
                  <div className={`absolute left-5 top-10 bottom-[-24px] w-0.5 ${isPast ? 'bg-indigo-600' : 'bg-slate-200'}`} />
                )}

                <button
                  onClick={() => handleStageSelect(stage.id)}
                  className="flex items-start gap-4 w-full text-left group"
                >
                  <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${isActive ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-200" :
                    isPast ? "bg-white border-indigo-600 text-indigo-600 group-hover:bg-indigo-50" :
                      "bg-slate-50 border-slate-200 text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-400"
                    }`}>
                    {isPast ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>

                  <div className="pt-2">
                    <p className={`text-sm font-bold transition-colors ${isActive ? "text-indigo-900" :
                      isPast ? "text-slate-700 group-hover:text-indigo-700" :
                        "text-slate-400 group-hover:text-indigo-500"
                      }`}>
                      {stage.label}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-white flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {STAGES.find(s => s.id === state.current_stage)?.label || "Learning Path"}
              </h1>
            </div>
            {learningPathPdfUrl && (
              <a
                href={learningPathPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-50 text-emerald-700 font-medium rounded-xl hover:bg-emerald-100 transition-colors flex items-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            )}
          </div>
          <button
            onClick={handleNext}
            disabled={isLoading || aiContent.includes("Learning Path Not Generated")}
            className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {state.current_stage === "REVISION" ? "Complete Chapter" : "Continue"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 lg:p-6 xl:p-8 bg-slate-50">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-4 lg:p-6 xl:p-8 min-h-[300px] lg:min-h-[400px]">
            {isGeneratingPath ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4 pt-20">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                <p className="text-sm font-medium">{generationProgress.status || 'Generating learning path...'}</p>
                {generationProgress.percent > 0 && (
                  <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 transition-all duration-300"
                      style={{ width: `${generationProgress.percent}%` }}
                    />
                  </div>
                )}
              </div>
            ) : isLoading ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4 pt-20">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                <p className="text-sm font-medium">Loading section content...</p>
              </div>
            ) : (
              <div className="prose prose-slate max-w-none prose-headings:text-indigo-900 prose-a:text-indigo-600">
                <Markdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                  {aiContent}
                </Markdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
