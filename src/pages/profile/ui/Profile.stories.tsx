// import { ComponentStory, ComponentMeta } from '@storybook/react'

// import { Theme } from 'app/providers/ThemeProvider'
// import { ThemeDecorator } from '../../../shared/config/storybook/themeDecorator/ThemeDecorator'
// import Profile from './Profile'
// import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator'

// // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
// export default {
//   title: 'pages/Profile',
//   component: Profile,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Profile>

// const Template: ComponentStory<typeof Profile> = () => <Profile />

// export const LightTheme = Template.bind({})
// LightTheme.decorators = [StoreDecorator({})]

// export const DarkTheme = Template.bind({})
// DarkTheme.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import Profile from './Profile'
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'pages/Profile',
  component: Profile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
