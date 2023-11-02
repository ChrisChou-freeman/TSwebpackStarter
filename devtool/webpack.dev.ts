import webpack from 'webpack'

import config from "../webpack.config.js";

const configDev: webpack.Configuration = {
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/render/index.ts',
  ]
}

export default configDev
