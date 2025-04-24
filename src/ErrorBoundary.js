import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false , error: "", errorInfo: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(
        {
            hasError: true,
            error: error,
            errorInfo: errorInfo
        }
    )
    }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. { this.state.error.toString() }</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary