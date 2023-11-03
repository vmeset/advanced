import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'

function Main() {
  const { t } = useTranslation('main')
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <h3>{t('главная')}</h3>
      <div>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          call modal
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
        exercitationem fugiat ratione voluptas vel dolorem voluptatibus quisquam
        iure corporis laboriosam minus odit, commodi repudiandae temporibus est
        modi possimus, labore harum.
      </Modal>
    </div>
  )
}

export default Main
