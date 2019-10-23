import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    let preloaderEls = document.querySelectorAll('[data-preloader]');
    assert.equal(preloaderEls.length, 3, 'all elements are present initially')

    await visit('/');
    preloaderEls = document.querySelectorAll('[data-preloader]');
    assert.equal(preloaderEls.length, 0, 'all elements are removed');
  });

});
