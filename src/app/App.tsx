import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from './providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

function App(): JSX.Element {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (Math.random() < 0.1) {
      throw new Error()
    }
  }, [])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          0
        </button>
        <Modal isOpen={isOpen} onClose={onClose}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
          exercitationem fugiat ratione voluptas vel dolorem voluptatibus
          quisquam iure corporis laboriosam minus odit, commodi repudiandae
          temporibus est modi possimus, labore harum.
        </Modal>
        <div className="page-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
