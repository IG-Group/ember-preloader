import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export default Mixin.create({
  afterModel(model, transition) {
    this._super(model, transition);
    this.removePreloader();
  },

  removePreloader() {
    let pre = $('[data-preloader]');
    if(!pre.length) {
      return;
    }
    pre.each((i, el) => $(el).remove());
  },
});
