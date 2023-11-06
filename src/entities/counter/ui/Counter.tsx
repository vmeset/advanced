import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h4 data-testid={'counter-value'}>|{value}|</h4>|{' '}
      <Button
        data-testid={'increment-btn'}
        theme={ButtonTheme.BACKGROUND}
        onClick={increment}
      >
        +
      </Button>{' '}
      |{' '}
      <Button
        data-testid={'decrement-btn'}
        theme={ButtonTheme.BACKGROUND}
        onClick={decrement}
      >
        -
      </Button>{' '}
      |
      <hr />
    </div>
  )
}
