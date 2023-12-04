import cls from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum TextThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextThemes
}

export const Text = (props: TextProps) => {
  const { className, title, text, theme = TextThemes.PRIMARY } = props

  console.log('theme:', theme)
  return (
    <div
      className={classNames(cls.Text, { [cls[theme]]: true }, [className])}
      data-testid="text-div"
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
