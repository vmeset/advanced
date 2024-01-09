import { StateSchema } from 'app/providers/StoreProvider'
import { getAuthState } from './getAuthState'

describe('getAuthState selector', () => {
  test('should return auth state', () => {
    const stateMock: DeepPartial<StateSchema> = {
      auth: {
        username: 'vmeset',
      },
    }
    expect(getAuthState(stateMock as StateSchema)).toEqual({
      username: 'vmeset',
    })
  })
})
