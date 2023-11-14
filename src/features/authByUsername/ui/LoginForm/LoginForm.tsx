import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation('translation')
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {t('Авторизация')}
      <Input
        type="text"
        className={cls.input}
        placeholder={t('логин')}
        autofocus
      />
      <Input type="text" className={cls.input} placeholder={t('пароль')} />
      <Button className={cls.btn}>{t('Войти')}</Button>
    </div>
  )
}
