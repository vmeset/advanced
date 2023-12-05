import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../model/slice/authSlice'
import { memo, useCallback } from 'react'
import { getUsername } from '../../model/selectors/getUsername/getUsername'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { getError } from '../../model/selectors/getError/getError'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextThemes } from 'shared/ui/Text/Text'

export interface LoginFormProps {
  className?: string
}

const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation('translation')

  const dispatch = useDispatch()
  const username = useSelector(getUsername)
  const password = useSelector(getPassword)
  const isLoading = useSelector(getIsLoading)
  const authError = useSelector(getError)

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

  const handleLogin = useCallback(() => {
    dispatch(authByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Авторизация')} />
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
      <div className={cls.formFooter}>
        {authError && (
          <Text text={t('Введены неверные данные!')} theme={TextThemes.ERROR} />
        )}
        <Button
          className={cls.btn}
          theme={isLoading ? ButtonTheme.DISABLED : ButtonTheme.OUTLINE}
          onClick={handleLogin}
        >
          {t('Войти')}
        </Button>
      </div>
    </div>
  )
})

export default LoginForm
