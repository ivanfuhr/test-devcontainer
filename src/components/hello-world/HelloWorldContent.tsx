type HelloWorldContentProps = {
  simulateError?: boolean
}

export function HelloWorldContent({
  simulateError = false,
}: HelloWorldContentProps) {
  if (simulateError) {
    throw new Error("Rendering failed while loading Hello World.")
  }

  return (
    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
      Hello World
    </h1>
  )
}
