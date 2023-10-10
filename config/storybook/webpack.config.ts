import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import webpack from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push(buildCssLoader(true))
  return config
}
