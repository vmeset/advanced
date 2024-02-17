import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ISidebarItem } from '../../model/sidebarItems'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

interface SidebarItemProps {
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem = memo(function SidebarItem({
  item,
  collapsed,
}: SidebarItemProps) {
  const { t } = useTranslation()
  return (
    <AppLink
      className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.PRIMARY_INVERTED}
      to={item.path}
    >
      {<item.Icon className={cls.icon} />}
      <span className={cls.link}>{t(item.title)}</span>
    </AppLink>
  )
})
