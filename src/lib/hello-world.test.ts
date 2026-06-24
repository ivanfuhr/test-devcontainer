import { describe, expect, it } from "vitest"
import {
  HELLO_WORLD_MESSAGE,
  HelloWorldLoadError,
  loadHelloWorld,
  LOADING_ERROR_MESSAGE,
} from "./hello-world"

describe("loadHelloWorld", () => {
  it("returns Hello World when loading succeeds", async () => {
    await expect(loadHelloWorld()).resolves.toEqual({
      message: HELLO_WORLD_MESSAGE,
    })
  })

  it("throws a loading error when forceError is enabled", async () => {
    await expect(loadHelloWorld({ forceError: true })).rejects.toThrow(
      HelloWorldLoadError,
    )
    await expect(loadHelloWorld({ forceError: true })).rejects.toThrow(
      LOADING_ERROR_MESSAGE,
    )
  })
})
