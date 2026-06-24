import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import {
  HelloWorldLoadingError,
  HelloWorldScreen,
} from "./hello-world-screen"
import { HELLO_WORLD_MESSAGE, LOADING_ERROR_MESSAGE } from "@/lib/hello-world"

describe("HelloWorldScreen", () => {
  it("displays Hello World without additional elements", () => {
    render(<HelloWorldScreen />)

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      HELLO_WORLD_MESSAGE,
    )
    expect(screen.queryByRole("button")).toBeNull()
  })
})

describe("HelloWorldLoadingError", () => {
  it("shows a generic loading error message", () => {
    render(<HelloWorldLoadingError />)

    expect(screen.getByRole("alert").textContent).toBe(LOADING_ERROR_MESSAGE)
  })
})
