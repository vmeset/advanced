import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProfile } from '../../types'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI
  try {
    const response = await extra.api.get<IProfile>('/profile')
    return response.data
  } catch (e) {
    return rejectWithValue('fetching profile data error')
  }
})
