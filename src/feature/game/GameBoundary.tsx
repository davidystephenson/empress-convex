import { Component } from "react";
import type { GameBoundaryProps, GameBoundaryState } from "./gameTypes";

export default class GameBoundary extends Component<GameBoundaryProps, GameBoundaryState> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}