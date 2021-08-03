import React from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.style'

class ErrorBoundary extends React.Component {
  state={hasErrored: false}

  static getDerivedStateFromError(error) {
    // error get thrown if any children has error
    return {hasErrored: true}
  }

  componentDidCatch(error, info) { // info: know which comp broke
    console.log(error, info)
  }
  render() {
  
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/qIufhof.png'} />
          <ErrorImageText> Sorry something went wrong</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary