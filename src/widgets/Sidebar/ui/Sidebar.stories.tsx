import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from '../../../shared/config/storybook/themeDecorator/ThemeDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const LightSidebar = Template.bind({})
LightSidebar.args = {}

export const DarkSidebar = Template.bind({})
DarkSidebar.args = {}
DarkSidebar.decorators = [ThemeDecorator(Theme.DARK)]
