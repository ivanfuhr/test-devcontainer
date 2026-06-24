export const HELLO_WORLD_MESSAGE = "Hello World"

export const LOADING_ERROR_MESSAGE =
  "Something went wrong while loading this page. Please refresh and try again."

export class HelloWorldLoadError extends Error {
  constructor(message = LOADING_ERROR_MESSAGE) {
    super(message)
    this.name = "HelloWorldLoadError"
  }
}

type LoadHelloWorldOptions = {
  forceError?: boolean
}

export async function loadHelloWorld(
  options: LoadHelloWorldOptions = {},
): Promise<{ message: string }> {
  if (options.forceError) {
    throw new HelloWorldLoadError()
  }

  return { message: HELLO_WORLD_MESSAGE }
}
