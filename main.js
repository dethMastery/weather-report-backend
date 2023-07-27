const exp = require('express')
const page = require('./src/pages')
const serve = require('./src/serve')

const app = exp()

page(app, __dirname)
serve(app)