import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('sidebar test', () => {
  test('render sidebar', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle button', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('toggleBtn')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('toggleBtn'))
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(screen.getByTestId('toggleBtn'))
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
