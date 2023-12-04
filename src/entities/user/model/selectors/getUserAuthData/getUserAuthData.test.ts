import { DeepPartial } from '@reduxjs/toolkit'
import { getUserAuthData } from './getUserAuthData'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getUserAuthData selector', () => {
  test('get username from authData', () => {
    const mockState: DeepPartial<StateSchema> = {
      user: {
        authData: {
          username: 'vmeset',
        },
      },
    }
    expect(getUserAuthData(mockState as StateSchema)).toEqual({
      username: 'vmeset',
    })
  })
})
