import cls from './Button.module.scss'
/* eslint-disable no-unused-vars */
import { classNames } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
  DISABLED = 'disabled'
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
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls[size]]: true,
  }
  return (
    <button
      data-testid="testBtn"
      className={classNames(cls.button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
