import { AuthSchema } from '../types/authSchema'
import { authActions, authReducer } from './authSlice'

describe('authSlice test', () => {
  test('set username', () => {
    const state: DeepPartial<AuthSchema> = { username: '' }
    expect(
      authReducer(state as AuthSchema, authActions.setUsername('vmeset'))
    ).toEqual({
      username: 'vmeset',
    })
  })

  test('set password', () => {
    const state: DeepPartial<AuthSchema> = { password: '' }
    expect(
      authReducer(state as AuthSchema, authActions.setPassword('12345678'))
    ).toEqual({
      password: '12345678',
    })
  })
})
