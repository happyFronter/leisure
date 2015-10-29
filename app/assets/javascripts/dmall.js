let restful = require('restful');
// let domain = env === 'production' ? 'appapi.dmall.com' : 'testappapi.dmall.com'
let domain = window.location.host;
let _ = require('lodash');

// console.log(window.location)

var dmall = {};

dmall.api = restful(domain)
  .prefixUrl('app');

dmall.postHeader = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'apiVersion': '1.3.0',
  'platform': 'ANDROID'
}

module.exports = dmall;
