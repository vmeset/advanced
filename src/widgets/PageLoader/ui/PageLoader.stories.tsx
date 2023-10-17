import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/themeDecorator/ThemeDecorator'
import { PageLoader } from './PageLoader'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'widget/PageLoader',
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = (args: object) => (
  <PageLoader {...(args ?? {})} />
)

export const LightPageLoader = Template.bind({})
LightPageLoader.args = {}

export const DarkPageLoader = Template.bind({})
DarkPageLoader.args = {}
DarkPageLoader.decorators = [ThemeDecorator(Theme.DARK)]
