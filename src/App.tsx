/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { Tutor } from "./components/Tutor";
import { Practice } from "./components/Practice";
import { ChapterFlow } from "./components/ChapterFlow";
import { Syllabus } from "./components/Syllabus";
import { AuthProvider, useAuth } from "./components/AuthProvider";
import { AuthPage } from "./components/AuthPage";
import { ErrorBoundary } from "./components/ErrorBoundary";

function MainApp() {
  const [activeTab, setActiveTab] = useState("learning-path");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  const closeSidebar = () => setIsSidebarOpen(false);

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar - responsive: hidden on mobile unless open */}
      <div className={`
        fixed lg:relative z-50 h-full transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            closeSidebar();
          }} 
          user={user} 
          onLogout={logout} 
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-hidden flex flex-col min-w-0">
        {/* Mobile Header with Hamburger */}
        <header className="lg:hidden flex items-center gap-3 p-4 bg-white border-b border-slate-200">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-bold text-indigo-600">Study Companion</span>
        </header>

        <div className="flex-1 overflow-hidden">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "learning-path" && <ChapterFlow />}
          {activeTab === "tutor" && <Tutor />}
          {activeTab === "practice" && <Practice />}
          {activeTab === "syllabus" && <Syllabus />}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </ErrorBoundary>
  );
}
