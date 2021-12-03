const fs = require('fs');

const md = `
# 這是新的檔案

將內容寫入 By fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile
`;

fs.writeFile('./assets/notes.md', md.trim(), err => {
  if(err) {
    throw err;
  }

  console.log('檔案儲存')
})