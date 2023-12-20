import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { memo } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primary-inverted',
  SECONDARY = 'secondary',
  SECONDARY_INVERTED = 'secondary-inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink = memo(function AppLink(props: AppLinkProps): JSX.Element {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props
  return (
    <Link
      to={to}
      className={classNames(cls.applink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
