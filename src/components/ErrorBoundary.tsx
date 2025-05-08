import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  title?: string;
  message?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static defaultProps = {
    title: 'We hit a snag',
    message: 'Something unexpected occurred. Our engineers have been notified.',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  handleHome = () => window.location.assign('/');

  render() {
    if (!this.state.hasError) return this.props.children;

    const { title, message } = this.props;
    return (
      <div className="fixed inset-0 flex items-center justify-center p-4" style={{ backgroundColor: 'rgb(18, 24, 31)' }}>
        <div className="backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-4 text-center" style={{ backgroundColor: 'rgba(22, 29, 39, 0.9)' }}>
          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-red-600 rounded-full animate-pulse">
            <svg
              className="w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-gray-300 mb-6">{this.state.error?.message || message}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={this.handleRetry}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-transform transform hover:scale-105"
            >
              Try Again
            </button>
            <button
              onClick={this.handleHome}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-transform transform hover:scale-105"
            >
              Go Home
            </button>
          </div>
          {this.state.errorInfo && (
            <details className="mt-6 text-left text-xs text-gray-400 max-h-40 overflow-auto">
              <summary className="cursor-pointer text-gray-300">View technical details</summary>
              <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
            </details>
          )}
        </div>
      </div>
    );
  }
}
