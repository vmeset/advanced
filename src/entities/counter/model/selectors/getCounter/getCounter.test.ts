import { StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from '../getCounter/getCounter'
import { DeepPartial } from '@reduxjs/toolkit'

describe('getCounter selector', () => {
  test('should return counter state', () => {
    const stateMock: DeepPartial<StateSchema> = {
      counter: {
        value: 47,
      },
    }
    expect(getCounter(stateMock as StateSchema)).toEqual({ value: 47 })
  })
})
