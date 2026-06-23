import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { HelloWorldScreen } from "./HelloWorldScreen"

afterEach(() => {
  cleanup()
})

describe("HelloWorldScreen", () => {
  it("displays Hello World prominently on the screen", () => {
    render(<HelloWorldScreen />)

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Hello World",
    })

    expect(heading).toBeVisible()
    expect(heading).toHaveClass("text-4xl", "font-bold")
  })

  it("displays Hello World correctly on mobile viewports", () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 375,
    })
    window.dispatchEvent(new Event("resize"))

    render(<HelloWorldScreen />)

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Hello World",
    })

    expect(heading).toBeVisible()
    expect(heading).toHaveClass("text-center")
  })

  it("shows an error message instead of Hello World when rendering fails", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)

    render(<HelloWorldScreen simulateError />)

    expect(
      screen.getByRole("alert", { name: /unable to display hello world/i }),
    ).toBeVisible()
    expect(
      screen.getByText("Rendering failed while loading Hello World."),
    ).toBeVisible()
    expect(
      screen.queryByRole("heading", { name: "Hello World" }),
    ).not.toBeInTheDocument()

    consoleError.mockRestore()
  })
})
