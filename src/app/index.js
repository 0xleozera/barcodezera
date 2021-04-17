import Controller from './Controller.js'
import Service from './Service.js'
import View from './View.js'

const service = new Service()
const view = new View()

export const start = () => Controller.initialize({ view, service })
