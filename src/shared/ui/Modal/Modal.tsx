import { ReactNode, useCallback, useEffect, useState } from 'react'
import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  children?: ReactNode
  className?: string
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = ({
  children,
  className,
  isOpen,
  onClose,
  lazy,
}: ModalProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false)
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  }
  const { theme } = useTheme()

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onEscKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onEscKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', onEscKeyDown)
    }
  }, [isOpen, onEscKeyDown])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <div className={cls.mask} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
