import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  test('Application calls removePreloader on afterModel', function(assert) {
    assert.expect(0);

    const route = this.owner.lookup('route:application');
    const stub = sinon.stub(route, 'removePreloader');
    sinon.assert.notCalled(stub);

    route.afterModel();
    sinon.assert.calledOnce(stub);
  });

});
