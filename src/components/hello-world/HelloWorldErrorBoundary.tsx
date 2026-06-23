import { Component, type ErrorInfo, type ReactNode } from "react"

type HelloWorldErrorBoundaryProps = {
  children: ReactNode
}

type HelloWorldErrorBoundaryState = {
  hasError: boolean
  message: string
}

export class HelloWorldErrorBoundary extends Component<
  HelloWorldErrorBoundaryProps,
  HelloWorldErrorBoundaryState
> {
  state: HelloWorldErrorBoundaryState = {
    hasError: false,
    message: "",
  }

  static getDerivedStateFromError(error: Error): HelloWorldErrorBoundaryState {
    return {
      hasError: true,
      message: error.message || "An unexpected error occurred.",
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Hello World screen rendering error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          role="alert"
          aria-label="Unable to display Hello World"
          className="flex min-h-svh w-full items-center justify-center px-4 py-8"
        >
          <div className="max-w-md text-center">
            <p className="text-lg font-semibold text-destructive">
              Unable to display Hello World
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {this.state.message}
            </p>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
