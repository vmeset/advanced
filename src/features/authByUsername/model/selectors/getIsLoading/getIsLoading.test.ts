import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getIsLoading } from './getIsLoading'

describe('getIsLoading selector', () => {
  test('setting isLoading', () => {
    const stateMock: DeepPartial<StateSchema> = {
      auth: {
        isLoading: true,
      },
    }
    expect(getIsLoading(stateMock as StateSchema)).toBe(true)
  })
  test('default isLoading case', () => {
    const stateMock: DeepPartial<StateSchema> = {}
    expect(getIsLoading(stateMock as StateSchema)).toBe(false)
  })
})
