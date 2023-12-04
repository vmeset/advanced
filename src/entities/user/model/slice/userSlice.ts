import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { IUser, UserSchema } from '../types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const data = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (data) {
        state.authData = JSON.parse(data)
      }
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
