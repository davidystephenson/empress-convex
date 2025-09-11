import { Component } from 'react'
import type { GameBoundaryProps, GameBoundaryState } from './gameTypes'

export default class GameBoundary extends Component<GameBoundaryProps, GameBoundaryState> {
  static getDerivedStateFromError (error: Error) {
    return { error }
  }

  async render () {
    if (this.state.error != null) {
      return <h1>Something went wrong.</h1>
    }

    return await this.props.children
  }
}
