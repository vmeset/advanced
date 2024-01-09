import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { CounterSchema } from 'entities/counter'
import { UserSchema } from 'entities/user'
import { AuthSchema } from 'features/authByUsername/model/types/authSchema'
import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { ProfileSchema } from 'entities/profile'
import { AxiosInstance } from 'axios'

export interface StateSchema {
  // async static
  counter: CounterSchema
  user: UserSchema

  // async Reducers
  auth?: AuthSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
}
