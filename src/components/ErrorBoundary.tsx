import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = this.state.error?.message || "An unexpected error occurred.";
      let isFirestoreError = false;
      let firestoreErrorDetails = null;

      try {
        const parsed = JSON.parse(errorMessage);
        if (parsed && parsed.error && parsed.operationType) {
          isFirestoreError = true;
          firestoreErrorDetails = parsed;
          errorMessage = parsed.error;
        }
      } catch (e) {
        // Not JSON
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-lg w-full">
            <h2 className="text-2xl font-bold text-rose-600 mb-4">Something went wrong</h2>
            <p className="text-slate-700 mb-4">
              {isFirestoreError ? "A database permission error occurred." : "The application encountered an error."}
            </p>
            <div className="bg-slate-100 p-4 rounded-lg overflow-auto max-h-64 text-sm font-mono text-slate-800 break-words">
              {errorMessage}
            </div>
            {isFirestoreError && firestoreErrorDetails && (
              <div className="mt-4 text-xs text-slate-500">
                <p><strong>Operation:</strong> {firestoreErrorDetails.operationType}</p>
                <p><strong>Path:</strong> {firestoreErrorDetails.path}</p>
                <p><strong>User ID:</strong> {firestoreErrorDetails.authInfo?.userId || "Not logged in"}</p>
              </div>
            )}
            <button
              className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              onClick={() => window.location.reload()}
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
