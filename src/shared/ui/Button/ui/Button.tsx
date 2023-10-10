import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button = ({
  className,
  children,
  theme,
  ...otherProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      data-testid="testBtn"
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
