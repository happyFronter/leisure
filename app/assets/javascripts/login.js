/**
 * @author jing.wang3@dmall.com
 * @time 2015.09.07
 * @desc wechat登录
 * @library
 */
let dmall = require("./dmall");
let rivets = require("rivets");
let loginView = document.getElementById('loginView');

let root = 'http://jsonplaceholder.typicode.com';
let data = '';
$.ajax({
  url: root + '/posts/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
  rivets.bind($('#loginView'), {auction: data})
}); 



