import React from "react";
import Text from "@atom/Text";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(`APP ERROR: ${errorInfo}`);
  }

  render() {
    const { hasError } = this.state,
      { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <Text variant={"h3"}>Something went wrong.</Text>;
    }

    return children;
  }
}

export default ErrorBoundary;
