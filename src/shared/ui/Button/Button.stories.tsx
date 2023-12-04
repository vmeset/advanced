import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from '../../config/storybook/themeDecorator/ThemeDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Text',
  theme: ButtonTheme.DISABLED,
}
export const DisabledDark = Template.bind({})
DisabledDark.args = {
  children: 'Text',
  theme: ButtonTheme.DISABLED,
}
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}
BackgroundInverted.decorators = [ThemeDecorator(Theme.DARK)]

export const MediumSize = Template.bind({})
MediumSize.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
}
MediumSize.decorators = [ThemeDecorator(Theme.DARK)]

export const LargeSize = Template.bind({})
LargeSize.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
}
LargeSize.decorators = [ThemeDecorator(Theme.DARK)]

export const ExtraLargeSize = Template.bind({})
ExtraLargeSize.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
}
ExtraLargeSize.decorators = [ThemeDecorator(Theme.DARK)]
