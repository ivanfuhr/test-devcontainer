import { createFileRoute } from "@tanstack/react-router"
import {
  HelloWorldLoadingError,
  HelloWorldScreen,
} from "@/components/hello-world-screen"
import { loadHelloWorld } from "@/lib/hello-world"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hello World",
      },
    ],
  }),
  loader: ({ location }) => {
    const forceError = new URLSearchParams(location.search).has("forceError")
    return loadHelloWorld({ forceError })
  },
  component: HelloWorldScreen,
  errorComponent: HelloWorldLoadingError,
})
