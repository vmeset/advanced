import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation('translation')
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to={RoutePath.main}
          className={cls.firstLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY_INVERTED} to={RoutePath.about}>
          {t('О нас')}
        </AppLink>
      </div>
    </div>
  )
}
