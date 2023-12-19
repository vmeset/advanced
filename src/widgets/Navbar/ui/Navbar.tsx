import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/authByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/user'
import { Text, TextThemes } from 'shared/ui/Text/Text'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation('translation')
  const dispatch = useAppDispatch()
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const authData = useSelector(getUserAuthData)

  const toggleModal = useCallback(() => {
    setIsAuthOpen((prev) => !prev)
  }, [])

  const handleLogout = () => {
    dispatch(userActions.removeAuthData())
  }

  if (authData?.username) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          <Text theme={TextThemes.INVERTED} title={authData.username} />
          <hr className={cls.divider} />
          <Button
            className={cls.authBtn}
            theme={ButtonTheme.CLEAR}
            onClick={handleLogout}
          >
            {t('Выйти')}
          </Button>
        </div>
        <LoginModal isOpen={isAuthOpen} onClose={toggleModal} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          className={cls.authBtn}
          theme={ButtonTheme.CLEAR}
          onClick={toggleModal}
        >
          {t('Войти')}
        </Button>
      </div>
      <LoginModal isOpen={isAuthOpen} onClose={toggleModal} />
    </div>
  )
}
