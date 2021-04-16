import figlet from 'figlet'

export const showBanner = () =>
  figlet('barcodezera', (err, data) => {
    if (err) {
      console.log('Something went wrong...')
      console.dir(err)
      return
    }
    console.log(data)
  })
