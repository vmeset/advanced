import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const PrimaryInput = Template.bind({})
PrimaryInput.args = {
  placeholder: 'username',
  value: 'vmeset',
}

export const DarkThemeInput = Template.bind({})
DarkThemeInput.args = {
  placeholder: 'username',
  value: 'vmeset',
}
DarkThemeInput.decorators = [ThemeDecorator(Theme.DARK)]
