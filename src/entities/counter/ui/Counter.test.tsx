import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter component', () => {
  test('basic render Counter component with initialState', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 100 } },
    })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('100')
  })
  test('increment Counter value', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 100 } },
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('101')
  })
  test('decrement Counter value', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 100 } },
    })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('99')
  })
})
