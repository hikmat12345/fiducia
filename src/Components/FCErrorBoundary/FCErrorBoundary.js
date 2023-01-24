//libs
import { Component } from "react";

//src
import NotFound from "../../NotFound";

export class FCErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
 

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h3>Something Went Wrong!</h3>
    }

    return this.props.children;
  }
}
