import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="content-wrapper">
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} path={path} element={
              <Suspense fallback={<PageLoader />}>
                {element}
              </Suspense>
            } />
          ))}
        </Routes>
      </div>
    </Suspense>
  )
}

export default AppRouter
