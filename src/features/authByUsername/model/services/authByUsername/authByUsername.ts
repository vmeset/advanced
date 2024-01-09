import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { IUser, userActions } from 'entities/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface UserProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<
  IUser,
  UserProps,
  ThunkConfig<string>
>('auth/authByUsername', async (authData, thunkAPI) => {
  const { rejectWithValue, dispatch, extra } = thunkAPI
  try {
    const response = await extra.api.post<IUser>('/login', authData)

    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    dispatch(userActions.setAuthData(response.data))

    return response.data
  } catch (e) {
    return rejectWithValue('auth error')
  }
})
