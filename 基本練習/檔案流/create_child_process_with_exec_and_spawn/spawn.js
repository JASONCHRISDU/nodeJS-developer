const cp = require('child_process');

const questionApp = cp.spwan('node', ['question.js'])

questionApp.stdout.on('data', data => {
  console.log(`from quApp: ${data}`)
})

questionApp.stdout.on('close', () => {
  console.log('Q done')
})