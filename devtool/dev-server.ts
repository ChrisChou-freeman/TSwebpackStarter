import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'

import ProConfig from '../webpack.config'

const config: webpack.Configuration = {
  mode: 'development',
  entry: [
    // Runtime code for hot module replacement
    'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    // Your entry
    './src/index.ts',
  ],
  devtool: 'inline-source-map',
  plugins: [
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ],
  output: ProConfig.output,
  module: ProConfig.module,
  resolve: ProConfig.resolve
}
const compiler = webpack(config)

// `hot` and `client` options are disabled because we added them manually
const server = new webpackDevServer({ hot: false, client: false }, compiler);

(async () => {
  await server.start()
  console.log('dev server is running')
})()
