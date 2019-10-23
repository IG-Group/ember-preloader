'use strict';

const fs = require('fs');
const path = require('path');

const EmberPreloader = {
  name: 'ember-preloader',
  included(app) {
    this._super.included.apply(this, arguments);
    this.appOptions = app.options || {};
    this.appRoot = app.project.root;
  },

  contentFor(type) {
    let preloader = this.appOptions.preloader;
    if(!preloader) {
      return;
    }

    let filePath = preloader[type];
    if(!filePath) {
      return;
    }

    let content = this.readFile(filePath);
    return renderWithTag(content, path.extname(filePath));
  },

  readFile(filePath) {
    let fullPath = path.join(this.appRoot, filePath);
    try {
      return fs.readFileSync(fullPath, 'utf8');
    } catch (e) {
      return this.ui.writeLine(this.name + ' error: file not found: ' + fullPath);
    }
  },
};

const tagConfigs = {
  '.css': 'style',
  '.html': 'div',
  '.js': 'script',
};

function renderWithTag(content, ext) {
  let tag = tagConfigs[ext];
  return `<${tag} data-preloader>
          ${content}
          </${tag}>`;
}

module.exports = EmberPreloader;
