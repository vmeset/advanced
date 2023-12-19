import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
