import Mixin from '@ember/object/mixin';

export default Mixin.create({

  afterModel(model, transition) {
    this._super(model, transition);
    this.removePreloader();
  },

  removePreloader() {
    const preloaderEls = document.querySelectorAll('[data-preloader]');
    preloaderEls.forEach((el) => el.parentNode.removeChild(el));
  },

});
