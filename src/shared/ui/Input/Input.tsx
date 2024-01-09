import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  handleInputChange?: (value: string) => void
  type?: string
  placeholder?: string
  autofocus?: boolean
}

export const Input = memo(function Input(props: InputProps) {
  const {
    className,
    value,
    handleInputChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>(null)

  const { t } = useTranslation('translation')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <div className={cls.placeholder}>{t(placeholder)}:</div>
      <div className={cls.caretkaWrapper}>
        <input
          ref={ref}
          value={value}
          type={type}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          className={cls.input}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={cls.caretka}
            style={{ left: caretPosition * 9 }}
          ></span>
        )}
      </div>
    </div>
  )
})
