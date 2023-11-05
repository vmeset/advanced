import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '../../../shared/ui/Button'
import { Modal } from '../../../shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'

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
      <Modal isOpen={isAuthOpen} onClose={toggleModal}>
        0777
      </Modal>
    </div>
  )
}
