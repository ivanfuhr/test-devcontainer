import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <h1 className="text-2xl font-medium">Hello World</h1>
    </main>
  )
}
