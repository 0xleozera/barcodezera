import chalk from 'chalk'

const chalkColor = (color) => chalk.hex(color)

const handleMessage = (color, message) => {
  const textColor = chalkColor(color)
  return textColor(message)
}

export const message = {
  information: (text) => handleMessage('#C678DD', text),
  success: (text) => handleMessage('#98C379', text),
  error: (text) => handleMessage('#E06C75', text),
}
