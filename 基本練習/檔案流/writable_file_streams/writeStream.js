const fs = require('fs');
const writeStream = fs.createWriteStream('./assets/file.txt', 'UTF-8');

process.stdin.on('data', data => {
  writeStream.write(data)
})
