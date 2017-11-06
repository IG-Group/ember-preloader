import $ from 'jquery';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  let pre = $('[data-preloader]');
  assert.equal(pre.length, 3, 'all elements are present initially')
  visit('/');

  andThen(function() {
    pre = $('[data-preloader]');
    assert.equal(pre.length, 0, 'all elements are removed');
  });
});