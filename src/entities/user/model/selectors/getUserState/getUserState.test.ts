import { StateSchema } from 'app/providers/StoreProvider'
import { getUserState } from './getUserState'

describe('getUserState selector', () => {
  test('should return user state', () => {
    const stateMock: DeepPartial<StateSchema> = {
      user: {
        authData: {
          username: 'vmeset',
        },
      },
    }
    expect(getUserState(stateMock as StateSchema)).toEqual({
      authData: { username: 'vmeset' },
    })
  })
})
