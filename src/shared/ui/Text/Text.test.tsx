import { render, screen } from '@testing-library/react'
import { Text, TextThemes } from './Text'

describe('text tests', () => {
  test('text render test', () => {
    render(<Text title="Title" text="text" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })
  test('render Text with error theme', () => {
    render(<Text theme={TextThemes.ERROR} title="Title" text="text" />)
    expect(screen.getByTestId('text-div')).toHaveClass('error')
  })
})
