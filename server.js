// 2. check this file
const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParsr = require('body-parser')
const auth = require('./middleware/auth')
const db = require('./config/mongoose')

function setupRoutes (app) {
  const APP_DIR = `${__dirname}/app`
  const features = fs.readdirSync(APP_DIR).filter(
    file => fs.statSync(`${APP_DIR}/${file}`).isDirectory()
  )

  features.forEach(feature => {
    const router = express.Router()
    const routes = require(`${APP_DIR}/${feature}/routes.js`)
    routes.setup(router)
    app.use(`/api/${feature}`, router)
  })
}

module.exports.startServer = function () {
  // db.connect use for connect db whatever you want see in config/mongoose.js
  db.connectDb()
  const port = 8080
  const app = express()

  app.use(express.static(path.join(__dirname, 'public')))
  app.use(auth)
  app.use(bodyParsr.urlencoded({extended: true}))
  app.use(bodyParsr.json())
  setupRoutes(app)

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

  app.listen(port, function () {
    console.log('server running on localhost:' + port)
  })
}
