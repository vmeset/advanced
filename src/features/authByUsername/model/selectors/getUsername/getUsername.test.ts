import { getUsername } from './getUsername'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getUsername selector', () => {
  test('get username from auth state', () => {
    const stateMock: DeepPartial<StateSchema> = {
      auth: {
        username: 'vmeset',
      },
    }
    expect(getUsername(stateMock as StateSchema)).toBe('vmeset')
  })
  test('get default empty string for username from auth state', () => {
    const stateMock: DeepPartial<StateSchema> = {}
    expect(getUsername(stateMock as StateSchema)).toBe('')
  })
})
