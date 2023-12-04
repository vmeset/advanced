import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  StoreDecorator({
    auth: {
      username: 'username',
      password: 'password',
    },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  StoreDecorator({
    auth: {
      username: 'username',
      password: 'password',
    },
  }),
  ThemeDecorator(Theme.DARK),
]

export const withError = Template.bind({})
withError.args = {}
withError.decorators = [
  StoreDecorator({
    auth: {
      username: 'username',
      password: 'password',
      error: 'error',
    },
  }),
  ThemeDecorator(Theme.DARK),
]

export const isLoading = Template.bind({})
isLoading.args = {}
isLoading.decorators = [
  StoreDecorator({
    auth: {
      isLoading: true,
    },
  }),
]

// export const Dark = Template.bind({})
// Dark.args = {
//   title: 'Title',
//   text: 'text',
// }
// Dark.decorators = [ThemeDecorator(Theme.DARK)]

// export const Error = Template.bind({})
// Error.args = {
//   title: 'Title',
//   text: 'text',
//   theme: TextThemes.ERROR,
// }
// export const DarkError = Template.bind({})
// DarkError.args = {
//   title: 'Title',
//   text: 'text',
//   theme: TextThemes.ERROR,
// }
// DarkError.decorators = [ThemeDecorator(Theme.DARK)]

// export const PrimaryInverted = Template.bind({})
// PrimaryInverted.args = {
//   title: 'Title',
//   text: 'text',
//   theme: TextThemes.PRIMARY,
// }
// PrimaryInverted.decorators = [ThemeDecorator(Theme.DARK)]

// export const DarkInverted = Template.bind({})
// DarkInverted.args = {
//   title: 'Title',
//   text: 'text',
//   theme: TextThemes.PRIMARY,
// }

// export const PrimaryOnlyTitle = Template.bind({})
// PrimaryOnlyTitle.args = {
//   title: 'onlyTitle',
// }

// export const PrimaryOnlyText = Template.bind({})
// PrimaryOnlyText.args = {
//   text: 'onlyText',
// }
