import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '../../src'),
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map(
      (rule: RuleSetRule | null | undefined | false | 0 | '' | '...') => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (rule && rule !== '...' && /svg/.test(rule.test as string)) {
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          return { ...rule, exclude: /\.svg$/i }
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        return rule
      }
    )
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  config.module?.rules?.push(buildCssLoader(true))

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true,
    })
  )

  return config
}
