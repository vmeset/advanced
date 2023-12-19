import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextThemes } from 'shared/ui/Text/Text'
import { getError } from '../../model/selectors/getError/getError'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { getUsername } from '../../model/selectors/getUsername/getUsername'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'
import { authActions, authReducer } from '../../model/slice/authSlice'
import cls from './LoginForm.module.scss'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  auth: authReducer,
}

const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation('translation')

  const dispatch = useAppDispatch()
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

  const handleLogin = useCallback(async () => {
    const result = await dispatch(authByUsername({ username, password }))
    console.log('result:', result)
  }, [dispatch, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
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
            <Text
              text={t('Введены неверные данные!')}
              theme={TextThemes.ERROR}
            />
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
    </DynamicModuleLoader>
  )
})

export default LoginForm
