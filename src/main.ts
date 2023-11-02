import express from "express"
import webpack from "webpack"
import fs from 'fs/promises'
import configDev from "../devtool/webpack.dev.js"
import webdevmid from 'webpack-dev-middleware'
import webdevhot from 'webpack-hot-middleware'
import path from "path"
import test from "./router/test.js"

test()

const app = express()

const compiler = webpack(configDev)

const port = 3000

app.use(webdevmid(compiler, {publicPath: '/'}))
app.use(webdevhot(compiler))

app.get('/', async (req, res) => {
  const filename = path.join(compiler.outputPath, 'index.html')
  const result = await fs.readFile(filename)
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
