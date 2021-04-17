import Progress from 'progress'

export const showProgressBar = ({ total, current }) => {
  const progressBar = new Progress('🔎 Analyzing your image [:bar] :percent', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total,
  })

  if (current !== 1) {
    progressBar.tick(current)
  }

  if (current === 1) {
    progressBar.tick(1)
    console.log('✅ Read completely!')
  }
}
