import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/themeDecorator/ThemeDecorator'
import { Navbar } from './Navbar'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const LightNavbar = Template.bind({})
LightNavbar.args = {}

export const DarkNavbar = Template.bind({})
DarkNavbar.args = {}
DarkNavbar.decorators = [ThemeDecorator(Theme.DARK)]