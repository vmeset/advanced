import { fetchProfileData } from './../services/fetchProfileData/fetchProfileData'
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'
import { IProfile, ProfileSchema } from '../types'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ProfileSchema>) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = ''
      state.isLoading = true
    }),
      builder.addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<IProfile>) => {
          state.data = action.payload
          state.isLoading = false
        }
      ),
      builder.addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
