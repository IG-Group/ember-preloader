import Ember from 'ember';
import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('route:application', 'Unit | Route | Application');

test('Application calls preloader on afterModel', function(assert) {
  let route = this.subject();
  let stub = this.stub(route, 'removePreloader');

  assert.ok(stub.notCalled, 'removePreloader not called straight away');

  route.afterModel();
  Ember.run.later(() => assert.ok(stub.calledOnce, 'removePreloader called once'));
});
