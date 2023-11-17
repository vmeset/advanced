import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getPassword } from './getPassword'

describe('getPassword selector', () => {
  test('get password from auth state', () => {
    const stateMock: DeepPartial<StateSchema> = {
      auth: {
        password: '12345678',
      },
    }
    expect(getPassword(stateMock as StateSchema)).toBe('12345678')
  })
})
