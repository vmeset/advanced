import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation('translation')
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {t('Авторизация')}
      <input
        type="text"
        className={cls.input}
        placeholder={t('Имя пользователя')}
      />
      <input type="text" className={cls.input} placeholder={t('Пароль')} />
      <Button className={cls.btn}>{t('Войти')}</Button>
    </div>
  )
}
