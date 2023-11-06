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
      <h4>value = |{value}|</h4>|{' '}
      <Button theme={ButtonTheme.BACKGROUND} onClick={increment}>
        +
      </Button>{' '}
      |{' '}
      <Button theme={ButtonTheme.BACKGROUND} onClick={decrement}>
        -
      </Button>{' '}
      |
      <hr />
    </div>
  )
}
