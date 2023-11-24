import { createSelector } from '@reduxjs/toolkit'
import { getAuthState } from '../getAuthState/getAuthState'
import { AuthSchema } from '../../types/authSchema'

export const getIsLoading = createSelector(
  getAuthState,
  (auth: AuthSchema) => auth.isLoading
)
