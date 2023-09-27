import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from './providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'

function App (): JSX.Element {
  const { theme } = useTheme()

  useEffect(() => {
    if (Math.random() < 0.9) {
      throw new Error()
    }
  }, [])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
