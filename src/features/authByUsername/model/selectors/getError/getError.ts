import { createSelector } from '@reduxjs/toolkit'
import { getAuthState } from '../getAuthState/getAuthState'

export const getError = createSelector(getAuthState, (state) => state.error)
