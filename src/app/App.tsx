import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from './providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { userActions } from 'entities/user'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

function App(): JSX.Element {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  console.log('test')

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
