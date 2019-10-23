'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    preloader: {
      head: 'tests/dummy/public/dummy.css',
      body: 'tests/dummy/public/dummy.html',
      'body-footer': 'tests/dummy/public/dummy.js',
    },
  });

  return app.toTree();
};
