import { createFileRoute } from "@tanstack/react-router"
import { HelloWorldScreen } from "@/components/hello-world/HelloWorldScreen"

export const Route = createFileRoute("/")({ component: HelloWorldPage })

function HelloWorldPage() {
  return <HelloWorldScreen />
}
