import express from 'express'

class App {
  constructor () {
    this.app = express()
    this.middlewares()
    this.router()
  }

  middlewares () {
    this.app.use(express.json())
  }

  routes () {

  }
}

export default new App().app
