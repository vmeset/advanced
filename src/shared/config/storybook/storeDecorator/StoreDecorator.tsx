/* eslint-disable react/display-name */
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/profile'
import { authReducer } from 'features/authByUsername/model/slice/authSlice'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  auth: authReducer,
  profile: profileReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
