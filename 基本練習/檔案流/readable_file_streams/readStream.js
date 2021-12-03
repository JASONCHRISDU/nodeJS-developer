const fs = require('fs');
const readStream = fs.createReadStream('./assets/steam.md', 'UTF-8')

console.log('輸入點什麼吧 兄弟..')

readStream.on('data', data => {
  console.log(`你輸入了${data.length -1}個字`)
})

readStream.once('data', data => {
  console.log(data);
})

readStream.on('end', () => {
  console.log('讀完了');
})