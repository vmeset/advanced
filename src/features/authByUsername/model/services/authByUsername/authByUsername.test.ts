import axios from 'axios'
import { authByUsername } from './authByUsername'
import { userActions } from 'entities/user'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('authByUsername.test', () => {
  // test('login success', async () => {
  //   const userData = { username: 'AK', id: 47 }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))

  //   const thunk = new TestAsyncThunk(authByUsername)
  //   const result = await thunk.callThunk({ username: 'AK', password: '47' })

  //   expect(thunk.dispatch).toHaveBeenCalledWith(
  //     userActions.setAuthData(userData)
  //   )
  //   expect(thunk.dispatch).toHaveBeenCalledTimes(3)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toEqual(userData)
  // })

  test('login error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(authByUsername)
    const result = await thunk.callThunk({ username: 'AK', password: '47' })

    // expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    // expect(mockedAxios.post).toHaveBeenCalled()
    // expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('auth error')
  })
})
