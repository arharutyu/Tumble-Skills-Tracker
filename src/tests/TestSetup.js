import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const customRender = (ui, options) =>
  render(ui, { wrapper: BrowserRouter, ...options })

const noRouterRender = (ui, options) =>
  render(ui, { ...options })

export * from '@testing-library/react'
export { customRender as render }
export { noRouterRender }
