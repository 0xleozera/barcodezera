import figlet from 'figlet'

import { message } from './messages.js'

const bannerColor = () => message.information(figlet.textSync('barcodezera'))

export const showBanner = () => console.log(bannerColor())
