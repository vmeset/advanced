import { ReactNode, useCallback, useEffect } from 'react'
import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'

interface ModalProps {
  children?: ReactNode
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = ({
  children,
  className,
  isOpen,
  onClose,
}: ModalProps): JSX.Element => {
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  }

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

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.mask} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
