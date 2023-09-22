import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <div className="content-wrapper">
        <Routes>
          {/* <Route path={"/"} element={<MainPage />} />
        <Route path={"/about"} element={<AboutPage />} /> */}
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  )
}

export default AppRouter
