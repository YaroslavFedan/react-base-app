const path = require('path');

console.log(__dirname);
module.exports = {
  styles: path.join(__dirname, '../src/styles'),
  components: path.join(__dirname, '../src/components'),
  modules: path.join(__dirname, '../src/modules'),
  utils: path.join(__dirname, '../src/utils'),
  assets: path.join(__dirname, '../src/assets'),

}