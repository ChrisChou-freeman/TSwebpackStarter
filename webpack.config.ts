import path from 'path'
import webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/render/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(new URL('.', import.meta.url).pathname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.css']
  }
}

export default config
