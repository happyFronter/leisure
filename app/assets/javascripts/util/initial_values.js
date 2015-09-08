/*
* @Author: leo
* @Date:   2015-08-22 13:08:06
* @Last Modified by:   leo
* @Last Modified time: 2015-08-24 16:22:56
*/

'use strict';

let _ = require('lodash');

/*
* @param template attributes that must exist
* @param data   data passed in
*/
let initialValues = function (template, data) {
  if (data) {
    for (var f in template) {
      if (template.hasOwnProperty(f) && ('undefined' != typeof(data[f]))) {
        template[f] = data[f];
      };
    };
  };
  // return template;
  _.merge(this, template);
}

module.exports = initialValues;
