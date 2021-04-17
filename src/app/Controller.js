class Controller {
  constructor({ service, view }) {
    this.service = service
    this.view = view
  }

  static initialize(dependencies) {
    const instance = new Controller(dependencies)

    return instance.#init()
  }

  #init() {
    this.view.init((file) => this.readAction(file))
  }

  async readAction(file) {
    const data = await this.service.readBarCodeImage(file)
    return data
  }
}

export default Controller
