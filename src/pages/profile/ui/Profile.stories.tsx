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

// import { ComponentMeta, ComponentStory } from '@storybook/react'
// import { Theme } from 'app/providers/ThemeProvider'
// import Profile from './Profile'
// import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator'
// import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator'

// // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
// export default {
//   title: 'pages/Profile',
//   component: Profile,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Profile>

// const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

// export const LightTheme = Template.bind({})
// LightTheme.args = {}
// LightTheme.decorators = [StoreDecorator({})]

// export const DarkTheme = Template.bind({})
// DarkTheme.args = {}
// DarkTheme.decorators = [
//   ThemeDecorator(Theme.DARK),
//   StoreDecorator({ profile: { data: { first: 'Alexander', lastname: 'V' } } }),
// ]