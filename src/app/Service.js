import Tesseract from 'tesseract.js'

import { getOnlyNumbers, showProgressBar } from '../utils/index.js'

class Service {
  static RECONIZE_LANGUAGE = 'eng'

  handleReadingProgress(reading) {
    const isReadFile = reading.status === 'recognizing text'
    const readProgress = isReadFile ? reading.progress : 0.2

    return readProgress
  }

  async readBarCodeImage(barCodeFile) {
    const barCodeParsed = await Tesseract.recognize(
      barCodeFile,
      Service.RECONIZE_LANGUAGE,
      {
        logger: (reading) => {
          showProgressBar({
            total: 1,
            current: this.handleReadingProgress(reading),
          })
        },
      },
    )

    const barCodeDigits = getOnlyNumbers(barCodeParsed.data.text)

    return barCodeDigits
  }
}

export default Service
