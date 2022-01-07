import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

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
    this.props.history.push("/");
  }

  render() {
    if (this.state.hasError) {
      <Redirect to="/user/cellar" />;
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
