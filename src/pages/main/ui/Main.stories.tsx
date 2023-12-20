import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/themeDecorator/ThemeDecorator'
import Main from './Main'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'pages/Main',
  component: Main,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args: object) => (
  <Main {...(args ?? {})} />
)

export const LightTheme = Template.bind({})
LightTheme.args = {}

export const DarkTheme = Template.bind({})
DarkTheme.args = {}
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
