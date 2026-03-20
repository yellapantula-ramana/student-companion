import { useState, useEffect } from "react";
import { BookOpen, Loader2 } from "lucide-react";
import { getOrGenerateSyllabus } from "../services/contentService";

const SUBJECTS = ["Science", "Mathematics", "English", "Computer Science"];

export function Syllabus() {
  const [activeSubject, setActiveSubject] = useState(SUBJECTS[0]);
  const [syllabus, setSyllabus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSyllabus = async () => {
      setIsLoading(true);
      try {
        const data = await getOrGenerateSyllabus(activeSubject);
        setSyllabus(data);
      } catch (error) {
        console.error("Failed to fetch syllabus:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSyllabus();
  }, [activeSubject]);

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="p-4 lg:p-6 xl:p-8 border-b border-slate-200 bg-white">
        <h1 className="text-xl lg:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" />
          CBSE Class 10 Syllabus
        </h1>
        <p className="text-slate-500 mt-1 lg:mt-2 text-sm lg:text-base">Explore the official curriculum and download AI-generated learning paths.</p>
        
        <div className="flex gap-2 mt-4 lg:mt-6 overflow-x-auto pb-2">
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() => setActiveSubject(subject)}
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
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400 space-y-4">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
            <p>Loading {activeSubject} syllabus...</p>
          </div>
        ) : syllabus ? (
          <div className="max-w-4xl mx-auto space-y-4 lg:space-y-6">
            {syllabus.chapters?.map((chapter: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 lg:p-6 flex flex-col md:flex-row gap-4 lg:gap-6 items-start md:items-center justify-between transition-all hover:shadow-md">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 lg:gap-3 mb-2">
                    <span className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="text-base lg:text-lg font-bold text-slate-900 truncate">{chapter.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      chapter.difficulty === 'Hard' ? 'bg-rose-100 text-rose-700' :
                      chapter.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {chapter.difficulty}
                    </span>
                  </div>
                  <div className="pl-9 lg:pl-11">
                    <p className="text-sm text-slate-500 mb-2 lg:mb-3">
                      {chapter.subtopics?.length} Subtopics
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {chapter.subtopics?.slice(0, 3).map((sub: string, i: number) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                          {sub}
                        </span>
                      ))}
                      {chapter.subtopics?.length > 3 && (
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                          +{chapter.subtopics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 w-full md:w-auto pl-9 md:pl-0">
                  <span className="text-xs text-slate-400 italic">
                    Learning path available in Interactive Mode
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500 mt-10">
            Failed to load syllabus.
          </div>
        )}
      </div>
    </div>
  );
}
