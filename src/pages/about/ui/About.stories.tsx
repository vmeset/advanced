import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/themeDecorator/ThemeDecorator'
import About from './About'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'pages/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof About>

const Template: ComponentStory<typeof About> = () => <About />

export const LightTheme = Template.bind({})

export const DarkTheme = Template.bind({})
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)]
