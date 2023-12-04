import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/themeDecorator/ThemeDecorator'
import { Text, TextThemes } from './Text'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title',
  text: 'text',
}

export const Dark = Template.bind({})
Dark.args = {
  title: 'Title',
  text: 'text',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
  title: 'Title',
  text: 'text',
  theme: TextThemes.ERROR,
}
export const DarkError = Template.bind({})
DarkError.args = {
  title: 'Title',
  text: 'text',
  theme: TextThemes.ERROR,
}
DarkError.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryInverted = Template.bind({})
PrimaryInverted.args = {
  title: 'Title',
  text: 'text',
  theme: TextThemes.PRIMARY,
}
PrimaryInverted.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkInverted = Template.bind({})
DarkInverted.args = {
  title: 'Title',
  text: 'text',
  theme: TextThemes.PRIMARY,
}

export const PrimaryOnlyTitle = Template.bind({})
PrimaryOnlyTitle.args = {
  title: 'onlyTitle',
}

export const PrimaryOnlyText = Template.bind({})
PrimaryOnlyText.args = {
  text: 'onlyText',
}
