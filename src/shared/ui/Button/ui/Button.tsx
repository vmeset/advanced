import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
  M = 'medium',
  L = 'large',
  XL = 'extra_large'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
}

export const Button = ({
  className,
  children,
  theme,
  size,
  ...otherProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      data-testid="testBtn"
      className={classNames(cls.button, {}, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
