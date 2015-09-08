var url = require('url')
var proxy = require('proxy-middleware')
var config = require('./')

var proxyOptions = url.parse('http://testappapi.dmall.com/app');
proxyOptions.route = '/app';

var proxy2Options = url.parse('http://m.dmall.com/json');
proxy2Options.route = '/json';

module.exports = {
  server: {
    baseDir: config.publicDirectory,
    middleware: [proxy(proxyOptions),proxy(proxy2Options)]
  },
  files: ['public/**/*.html']
}
