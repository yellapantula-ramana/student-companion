import { BookOpen, LayoutDashboard, MessageSquare, Target, Map, LogOut } from "lucide-react";

interface User {
  uid: string;
  email: string;
  display_name: string | null;
  photo_url: string | null;
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: User;
  onLogout: () => void;
}

export function Sidebar({ activeTab, setActiveTab, user, onLogout }: SidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "learning-path", label: "Learning Path", icon: Map },
    { id: "tutor", label: "AI Tutor", icon: MessageSquare },
    { id: "practice", label: "Practice Tests", icon: Target },
    { id: "syllabus", label: "Syllabus", icon: BookOpen },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen flex flex-col shrink-0">
      <div className="p-4 lg:p-6 border-b border-slate-200">
        <h1 className="text-lg lg:text-xl font-bold text-indigo-600 flex items-center gap-2">
          <BookOpen className="w-5 h-5 lg:w-6 lg:h-6" />
          <span className="hidden sm:inline">Study Companion</span>
          <span className="sm:hidden">SC</span>
        </h1>
        <p className="text-xs text-slate-500 mt-1 hidden lg:block">Class 10 CBSE</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            {user?.photo_url ? (
              <img src={user.photo_url} alt="User" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                {user?.display_name?.charAt(0) || user?.email?.charAt(0) || "S"}
              </div>
            )}
            <div className="text-left overflow-hidden">
              <p className="text-sm font-medium text-slate-900 truncate max-w-[100px]">{user?.display_name || user?.email || "Student"}</p>
              <p className="text-xs text-slate-500">Target: 95%</p>
            </div>
          </div>
          <button onClick={onLogout} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Sign Out">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
