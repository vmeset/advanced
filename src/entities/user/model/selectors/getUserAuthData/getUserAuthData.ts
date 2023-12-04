import { createSelector } from '@reduxjs/toolkit'
import { getUserState } from '../getUserState/getUserState'
import { UserSchema } from '../../types'

export const getUserAuthData = createSelector(
  getUserState,
  (user: UserSchema) => user?.authData
)
