import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getError } from './getError'

describe('getError selector', () => {
  test('get error from state', () => {
    const stateMock: DeepPartial<StateSchema> = {
      auth: {
        error: 'shit happens',
      },
    }
    expect(getError(stateMock as StateSchema)).toBe('shit happens')
  })
})
