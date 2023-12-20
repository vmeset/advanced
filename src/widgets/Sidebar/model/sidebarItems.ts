import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/main-page.svg'
import AboutIcon from 'shared/assets/icons/about-page.svg'
import ProfileIcon from 'shared/assets/icons/profile-page.svg'

export interface ISidebarItem {
  title: string
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sideBarItems: ISidebarItem[] = [
  {
    Icon: HomeIcon,
    title: 'Главная',
    path: RoutePath.main,
  },
  {
    Icon: AboutIcon,
    title: 'О нас',
    path: RoutePath.about,
  },
  {
    Icon: ProfileIcon,
    title: 'Профиль',
    path: RoutePath.profile,
  },
]
