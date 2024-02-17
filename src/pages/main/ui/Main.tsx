import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'

const Main = memo(function Main() {
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
          {t('модалочка')}
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        {t('Lorem ipsum')}
      </Modal>
    </div>
  )
})

export default Main
