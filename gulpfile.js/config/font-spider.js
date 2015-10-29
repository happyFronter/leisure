var config = require('./')

module.exports = {
  src: config.sourceDirectory + '/views/**/*.html',
  dest: config.publicDirectory
}
