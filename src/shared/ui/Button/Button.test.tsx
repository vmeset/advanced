import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('button tests', () => {
  test('button render test', () => {
    render(<Button>testBtn</Button>)
    expect(screen.getByText('testBtn')).toBeInTheDocument()
  })
  test('render button with class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>testBtn</Button>)
    expect(screen.getByText('testBtn')).toHaveClass('clear')
  })
})
