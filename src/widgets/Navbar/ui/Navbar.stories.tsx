import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/themeDecorator/ThemeDecorator'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator'

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
LightNavbar.decorators = [StoreDecorator({})]

export const DarkNavbar = Template.bind({})
DarkNavbar.args = {}
DarkNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const AuthorizedNavbar = Template.bind({})
AuthorizedNavbar.args = {}
AuthorizedNavbar.decorators = [
  StoreDecorator({ user: { authData: { username: 'vmeset' } } }),
]

export const AuthorizedDarkNavbar = Template.bind({})
AuthorizedDarkNavbar.args = {}
AuthorizedDarkNavbar.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: { username: 'vmeset' } } }),
]
