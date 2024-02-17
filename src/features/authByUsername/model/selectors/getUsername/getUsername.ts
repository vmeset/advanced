import { StateSchema } from 'app/providers/StoreProvider'

export const getUsername = (state: StateSchema) => state?.auth?.username || ''
