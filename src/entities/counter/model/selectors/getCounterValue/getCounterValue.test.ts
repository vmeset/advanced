import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'
import { getCounterValue } from './getCounterValue'

describe('getCounter selector', () => {
  test('should return the counter value from state', () => {
    const stateMock: DeepPartial<StateSchema> = {
      counter: {
        value: 47,
      },
    }

    expect(getCounterValue(stateMock as StateSchema)).toEqual(47)
  })
})
