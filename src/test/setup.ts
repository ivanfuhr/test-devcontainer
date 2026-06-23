import * as React from "react"
import { act } from "react"
import "@testing-library/jest-dom/vitest"

// @testing-library/react expects React.act in React 19 test environments.
Object.assign(React, { act })

// @ts-expect-error Vitest jsdom environment flag for React act().
globalThis.IS_REACT_ACT_ENVIRONMENT = true
