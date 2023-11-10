import cls from './User.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface UserProps {
  className?: string
}

export const User = ({ className }: UserProps) => {
  return <div className={classNames(cls.User, {}, [className])}></div>
}
