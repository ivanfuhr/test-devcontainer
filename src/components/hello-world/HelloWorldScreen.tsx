import { HelloWorldContent } from "./HelloWorldContent"
import { HelloWorldErrorBoundary } from "./HelloWorldErrorBoundary"

type HelloWorldScreenProps = {
  simulateError?: boolean
}

export function HelloWorldScreen({
  simulateError = false,
}: HelloWorldScreenProps) {
  return (
    <HelloWorldErrorBoundary>
      <main className="flex min-h-svh w-full items-center justify-center px-4 py-8">
        <HelloWorldContent simulateError={simulateError} />
      </main>
    </HelloWorldErrorBoundary>
  )
}
