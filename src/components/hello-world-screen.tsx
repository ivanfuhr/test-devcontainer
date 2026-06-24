import {
  HELLO_WORLD_MESSAGE,
  LOADING_ERROR_MESSAGE,
} from "@/lib/hello-world"

export function HelloWorldScreen() {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <h1 className="text-2xl font-medium">{HELLO_WORLD_MESSAGE}</h1>
    </main>
  )
}

export function HelloWorldLoadingError() {
  return (
    <main
      className="flex min-h-svh items-center justify-center px-6 text-center"
      role="alert"
    >
      <p className="max-w-md text-base text-muted-foreground">
        {LOADING_ERROR_MESSAGE}
      </p>
    </main>
  )
}
