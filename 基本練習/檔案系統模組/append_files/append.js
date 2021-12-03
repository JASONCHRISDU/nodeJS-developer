const fs = require('fs');
const colorData = require('./color.json');

colorData.colorList.forEach( color => {
  fs.appendFile('./color.md', `${color.name} \n`, err => {
    if(err) {
      throw err;
    }
  });
});