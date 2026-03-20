import { Target, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

export function Dashboard() {
  const stats = [
    { label: "Overall Mastery", value: "78%", icon: Target, color: "text-indigo-600", bg: "bg-indigo-100" },
    { label: "Chapters Completed", value: "4/15", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-100" },
    { label: "Tests Taken", value: "12", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Weak Topics", value: "3", icon: AlertCircle, color: "text-rose-600", bg: "bg-rose-100" },
  ];

  const recentTopics = [
    { name: "Light - Reflection and Refraction", mastery: 85, status: "Strong" },
    { name: "Chemical Reactions and Equations", mastery: 60, status: "Needs Review" },
    { name: "Polynomials", mastery: 92, status: "Mastered" },
  ];

  return (
    <div className="p-4 lg:p-6 xl:p-8 max-w-6xl mx-auto space-y-6 lg:space-y-8">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Welcome back!</h2>
        <p className="text-slate-500 mt-1">Here's your progress for Class 10 CBSE preparation.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-4 lg:p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-500 truncate">{stat.label}</p>
                  <p className="text-2xl lg:text-3xl font-bold text-slate-900 mt-1 lg:mt-2">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shrink-0 ${stat.bg}`}>
                  <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Topics</h3>
          <div className="space-y-4">
            {recentTopics.map((topic, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div>
                  <p className="font-medium text-slate-900">{topic.name}</p>
                  <p className={`text-xs font-medium mt-1 ${
                    topic.status === 'Mastered' ? 'text-emerald-600' : 
                    topic.status === 'Strong' ? 'text-blue-600' : 'text-rose-600'
                  }`}>
                    {topic.status}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-slate-900">{topic.mastery}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Recommended Next Steps</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-900">Review Chemical Reactions</h4>
                <p className="text-sm text-indigo-700 mt-1">Your mastery is at 60%. Take a quick 5-question quiz to improve.</p>
                <button className="mt-3 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                  Start Practice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
