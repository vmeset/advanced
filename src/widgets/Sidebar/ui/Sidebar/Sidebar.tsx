import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { sideBarItems } from 'widgets/Sidebar/model/sidebarItems'

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
        {sideBarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
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
