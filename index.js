import commander from 'commander'

import { CURRENT_VERSION, showBanner } from './src/utils/index.js'

commander.version(CURRENT_VERSION)
commander.parse(process.argv)
showBanner()
