import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from 'entities/user'

interface UserProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<
  IUser,
  UserProps,
  { rejectValue: string }
>('auth/authByUsername', async (authData, { rejectWithValue }) => {
  try {
    const response = await axios.post<IUser>(
      'http://localhost:5005/login',
      authData
    )
    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    return rejectWithValue('auth error')
  }
})
