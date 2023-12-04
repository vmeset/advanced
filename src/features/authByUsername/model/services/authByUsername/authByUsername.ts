import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser, userActions } from 'entities/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface UserProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<
  IUser,
  UserProps,
  { rejectValue: string }
>('auth/authByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<IUser>(
      'http://localhost:5005/login',
      authData
    )
    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    thunkAPI.dispatch(userActions.setAuthData(response.data))

    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('auth error')
  }
})
