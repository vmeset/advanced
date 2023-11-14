import React, { InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  handleInputChange?: (value: string) => void
  type?: string
}

export const Input = memo(function Input(props: InputProps) {
  const {
    className,
    value,
    handleInputChange,
    type = 'text',
    ...otherProps
  } = props

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange?.(e.target.value)
  }
  return (
    <div>
      <input
        className={classNames(cls.Input, {}, [className])}
        value={value}
        type={type}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  )
})
