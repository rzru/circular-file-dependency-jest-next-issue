import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

jest.mock('../utils/foo', () => {
  const test = jest.requireActual('../utils/foo');
  return {
    ...test
  }
})

describe('Home', () => {
  it('renders a heading', () => {
    expect(render(<Home/>)).toBe(2)
  })
})
