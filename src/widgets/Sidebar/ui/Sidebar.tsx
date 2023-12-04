import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import HomeIcon from 'shared/assets/icons/main-page.svg'
import AboutIcon from 'shared/assets/icons/about-page.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation('translation')
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="toggleBtn"
        onClick={toggleCollapsed}
        className={classNames(cls.toggleBtn)}
        theme={ButtonTheme.BACKGROUND}
        size={ButtonSize.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.links}>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to={RoutePath.main}
          // className={cls.firstLink}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О нас')}</span>
        </AppLink>
      </div>

      <div
        className={classNames(
          cls.switchers,
          {
            [cls.collapsed]: collapsed,
          },
          []
        )}
      >
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
}
