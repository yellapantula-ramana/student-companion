import { useState } from "react";
import { Target, CheckCircle2, Clock, FileText, Loader2, ArrowRight } from "lucide-react";
import { getOrGeneratePracticeTests } from "../services/contentService";

const SUBJECTS = ["Science", "Mathematics", "English", "Computer Science"];

export function Practice() {
  const [activeSubject, setActiveSubject] = useState(SUBJECTS[0]);
  const [chapterInput, setChapterInput] = useState("");
  const [tests, setTests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTest, setActiveTest] = useState<any | null>(null);

  const handleGenerateTests = async () => {
    if (!chapterInput.trim()) return;
    setIsLoading(true);
    try {
      const generatedTests = await getOrGeneratePracticeTests(activeSubject, chapterInput);
      setTests(generatedTests);
    } catch (error) {
      console.error("Failed to generate tests:", error);
      alert("Failed to generate tests. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (activeTest) {
    return (
      <div className="flex flex-col h-full bg-slate-50">
        <div className="p-4 lg:p-6 border-b border-slate-200 bg-white flex justify-between items-center gap-3">
          <div className="min-w-0">
            <h2 className="text-lg lg:text-xl font-bold text-slate-900 truncate">Practice Test: {activeTest.test_id.toUpperCase()}</h2>
            <p className="text-sm text-slate-500 truncate">{activeTest.subject} - {activeTest.chapter}</p>
          </div>
          <button
            onClick={() => setActiveTest(null)}
            className="px-3 lg:px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors font-medium text-sm shrink-0"
          >
            Exit
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 xl:p-8">
          <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
            {activeTest.questions?.map((q: any, i: number) => (
              <div key={i} className="bg-white p-4 lg:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-3 lg:gap-4">
                  <span className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                      {q.type}
                    </span>
                    <p className="text-slate-900 font-medium text-base lg:text-lg mb-3 lg:mb-4">{q.question}</p>
                    
                    {q.type === "MCQ" && q.options && q.options.length > 0 && (
                      <div className="space-y-2 mb-6">
                        {q.options.map((opt: string, j: number) => (
                          <div key={j} className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <details className="group">
                        <summary className="cursor-pointer text-indigo-600 font-medium hover:text-indigo-700 list-none flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                          Show Answer & Explanation
                        </summary>
                        <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-900">
                          <p className="font-bold mb-2">Answer: {q.answer}</p>
                          <p className="text-sm opacity-90">{q.explanation}</p>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="p-4 lg:p-6 xl:p-8 border-b border-slate-200 bg-white">
        <h1 className="text-xl lg:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" />
          Practice Tests
        </h1>
        <p className="text-slate-500 mt-1 lg:mt-2 text-sm lg:text-base">Generate and take chapter-wise practice tests based on CBSE patterns.</p>
        
        <div className="flex gap-2 mt-4 lg:mt-6 overflow-x-auto pb-2">
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() => {
                setActiveSubject(subject);
                setTests([]);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeSubject === subject
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-4 lg:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 lg:mb-8">
            <h2 className="text-base lg:text-lg font-bold text-slate-900 mb-3 lg:mb-4">Find or Generate Tests</h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="text"
                value={chapterInput}
                onChange={(e) => setChapterInput(e.target.value)}
                placeholder="Enter Chapter Name"
                className="flex-1 px-3 lg:px-4 py-2 lg:py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-sm lg:text-base"
              />
              <button
                onClick={handleGenerateTests}
                disabled={isLoading || !chapterInput.trim()}
                className="px-4 lg:px-6 py-2 lg:py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-sm lg:text-base"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 lg:w-5 lg:h-5 animate-spin" />
                    <span className="hidden sm:inline">Generating...</span>
                    <span className="sm:hidden">Gen...</span>
                  </>
                ) : (
                  "Get Tests"
                )}
              </button>
            </div>
          </div>

          {tests.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {tests.map((test, index) => (
                <div key={index} className="bg-white p-4 lg:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3 lg:mb-4 gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <FileText className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <span className="px-2 lg:px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider shrink-0">
                      {test.test_id}
                    </span>
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-1">{test.chapter}</h3>
                  <p className="text-sm text-slate-500 mb-4 lg:mb-6">{test.subject}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {test.questions?.length || 0} Questions
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-500" />
                      45 Mins
                    </div>
                  </div>

                  <button 
                    onClick={() => setActiveTest(test)}
                    className="w-full py-2.5 bg-indigo-50 text-indigo-700 font-medium rounded-xl hover:bg-indigo-100 transition-colors"
                  >
                    Start Practice Test
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
