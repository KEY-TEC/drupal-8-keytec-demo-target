'use strict';
var fs = require('fs');
var yaml = require('js-yaml');
var _ = require('lodash');

// Custom Gulp Tasks
module.exports = function (gulp, config, tasks) {
  var defaultConfig = yaml.safeLoad(fs.readFileSync(__dirname + '/config.default.yml', 'utf8'));
  config = _.merge(defaultConfig, config);

  if (config.images.enabled) {
    require('./lib/images.js')(gulp, config, tasks);
  }

};
