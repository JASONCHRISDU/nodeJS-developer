const fs = require('fs');

if(fs.existsSync('storage-files')) {
  console.log('已經有該資料夾了');
  return;
}

fs.mkdir('storage-files', err => {
  if(err) {
    throw err;
  }

  console.log('直接建立資料夾');
});