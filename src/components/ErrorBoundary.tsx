// src/components/ErrorBoundary.tsx

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen w-full items-center justify-center bg-black text-white px-4 text-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Something went wrong 😞</h1>
            <p className="text-sm mb-4">
              An unexpected error has occurred. Please try refreshing the page
              or come back later.
            </p>
            <pre className="bg-black/40 p-4 rounded text-xs overflow-auto max-w-md mx-auto">
              {this.state.error?.message}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
