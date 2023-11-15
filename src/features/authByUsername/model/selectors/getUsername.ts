import { createSelector } from '@reduxjs/toolkit'
import { getAuthState } from './getAuthState'
import { AuthSchema } from '../types/authSchema'

export const getUsername = createSelector(
  getAuthState,
  (auth: AuthSchema) => auth.username
)
