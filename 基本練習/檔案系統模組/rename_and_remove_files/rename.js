const fs = require('fs');
// 修改名稱
fs.renameSync('../append_files/color.json', '../append_files/colorRename.json')
// 移動檔案至新的檔案
fs.rename('../append_files/color.md', '../append_files/rename/colorData.md', err => {
  if(err) {
    throw err;
  }
});

setTimeout(() => {
  // 刪除檔案
  fs.unlinkSync('../append_files/1.jpg');
}, 4000)