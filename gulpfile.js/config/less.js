var config = require('./')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] })

module.exports = {
  // autoprefixer: { browsers: ['last 2 version'] },
  // src: config.sourceAssets + "/stylesheets/**/*.less",
  // dest: config.publicAssets + '/stylesheets',
  // settings: {
  //   indentedSyntax: true, // Enable .sass syntax!
  //   imagePath: 'assets/images' // Used by the image-url helper
  // }
  src: config.sourceAssets + "/stylesheets/**/*.less",
  dest: config.publicAssets + '/stylesheets',
  settings: {
    plugins: [autoprefix]
  }
}
