#!/usr/bin/env node

import { Command } from 'commander'

import { CURRENT_VERSION, showBanner, message } from '../utils/index.js'

class View {
  constructor() {
    this.cli = new Command()
  }

  init(action) {
    this.cli.version(CURRENT_VERSION)
    showBanner()

    this.showBarCode(action)

    this.cli.parse(process.argv)
  }

  showBarCode(action) {
    this.cli
      .command('read <file>', { isDefault: true })
      .description('Read image and get number sequence')
      .action(async (file) => {
        const data = await action(file)

        if (!data) {
          console.log(
            `\n${message.error(
              '😔 Something is wrong, use another image that is sharper!',
            )}`,
          )
          return
        }

        console.log(
          `🥳 Yeeah! Get your barcode here: ${message.information(data)}`,
        )
      })
  }
}

export default View