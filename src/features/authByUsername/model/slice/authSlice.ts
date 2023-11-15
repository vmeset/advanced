import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthSchema } from '../types/authSchema'

const initialState: AuthSchema = {
  isLoading: false,
  password: '',
  username: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
