/**
 * @author jing.wang3@dmall.com
 * @time 2015.09.07
 * @desc wechat登录
 * @library
 */
let dmall = require("./dmall");
let rivets = require("rivets");
let _ = require('lodash');

// let loginView = document.getElementById('loginView');

// let wechatRedirectUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + config.wechatAppid +
              // "&redirect_uri=" + encodeURIComponent($location.absUrl()) + "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
// let wechatRedirectUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb0a7af1f7ab4d74a&redirect_uri=http%3A%2F%2Fdbt.hongcai.com%2F&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
// let root = 'http://jsonplaceholder.typicode.com';
// let targetUrl = 'http://m.dmall.com/pay/payment?orderId=&payChannel=WECHATPAY&type=1&source=1';
// let data = '';
// $.ajax({
//   url: root + '/posts/1',
//   url: root + '/pay/payment?orderId=&payChannel=WECHATPAY&type=1&source=1',
//   url: root + '/pay/payment',
//   url: targetUrl,
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
//   rivets.bind($('#loginView'), {auction: data})
// }); 
_.merge(dmall.postHeader,{'orderId':'1123344','payChannel':'WECHATPAY','type':'1','source':'1'});

dmall.api.all('pay/payment')
.postAsForm({},dmall.postHeader)
.then(function(response){
  "use strict";
  console.log(response());
  window.location.href="weixin://wap/pay?appid%3Dwxae3e8056daea8727%26noncestr%3D1de7d2b90d554be9f0db1c338e80197d%26package%3DWAP%26prepayid%3Dwx201509142058564b946715060409547831%26timestamp%3D1442235536%26sign%3D11D05E0485C1830204886CFEC3ECF745";
});



