import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '../../../shared/ui/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/authByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation('translation')
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const toggleModal = useCallback(() => {
    setIsAuthOpen((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.CLEAR} onClick={toggleModal}>
          {t('Войти')}
        </Button>
      </div>
      <LoginModal isOpen={isAuthOpen} onClose={toggleModal} />
    </div>
  )
}
