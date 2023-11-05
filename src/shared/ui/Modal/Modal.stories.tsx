import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'
import { ThemeDecorator } from '../../config/storybook/themeDecorator/ThemeDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laborum iusto sint quo nobis facere dignissimos, odio provident commodi soluta, possimus optio consectetur rem!',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laborum iusto sint quo nobis facere dignissimos, odio provident commodi soluta, possimus optio consectetur rem!',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
