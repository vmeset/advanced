import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('sidebar test', () => {
  test('render sidebar', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle button', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('toggleBtn')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('toggleBtn'))
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(screen.getByTestId('toggleBtn'))
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
