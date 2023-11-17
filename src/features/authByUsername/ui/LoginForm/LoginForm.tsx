import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../model/slice/authSlice'
import { memo, useCallback } from 'react'
import { getUsername } from '../../model/selectors/getUsername/getUsername'
import { getPassword } from '../../model/selectors/getPassword/getPassword'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(function LoginForm({
  className,
}: LoginFormProps) {
  const { t } = useTranslation('translation')

  const dispatch = useDispatch()
  const username = useSelector(getUsername)
  const password = useSelector(getPassword)

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(authActions.setUsername(value))
    },
    [dispatch]
  )

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(authActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {}, [])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {t('Авторизация')}
      <Input
        type="text"
        className={cls.input}
        placeholder={t('логин')}
        autofocus
        handleInputChange={handleUsernameChange}
        value={username}
      />
      <Input
        type="text"
        placeholder={t('пароль')}
        handleInputChange={handlePasswordChange}
        value={password}
      />
      <Button
        className={cls.btn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})
