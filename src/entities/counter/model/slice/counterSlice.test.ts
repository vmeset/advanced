import { CounterSchema } from '../types/counterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  test('decrement', () => {
    const mockState: CounterSchema = { value: 100 }
    expect(counterReducer(mockState, counterActions.decrement())).toEqual({
      value: 99,
    })
  })
  test('increment', () => {
    const mockState: CounterSchema = { value: 100 }
    expect(counterReducer(mockState, counterActions.increment())).toEqual({
      value: 101,
    })
  })
  test('empty state test', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    })
  })
})
