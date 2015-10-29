'use strict';

var lasso = require('lasso');

// Configure the Lasso.js
lasso.configure({
  plugins: [
    'lasso-marko',
    'lasso-less'
  ],
  outputDir: './src/static',
  urlPrefix: '/src/static',
  fingerprintsEnabled: false,
  minify: false,
  resolveCssUrls: true,
  bundlingEnabled: true,
  bundles: [
    {
      name: 'jquery',
      dependencies: [
        'require: jquery'
      ]
    },
    {
      name: 'math',
      dependencies: [
        'require: ./src/pages/taglib/js/add'
      ]
    }
  ]
});

var template = require('marko').load(require.resolve('./template.html'));

module.exports = function(req, res) {
  template.render({},
    res);
};
