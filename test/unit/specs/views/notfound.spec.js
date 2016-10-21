import Vue from 'vue';
import Vuex from 'vuex';
import storeOption from 'store';
import NotFound from 'views/notfound';
Vue.use(Vuex);
const store = new Vuex.Store(storeOption);
describe('notfound.vue', () => {

  let vm ;

  before(function(done) {

    vm = new Vue({
      el: document.createElement('div'),
      store,
      render: (h) => h(NotFound),
      mounted: function () {
        setTimeout(function () {
          done();
        });
      }
    });
  });

  it('should render not found', () => {
    expect(vm.$el.querySelector('p').innerText.trim()).to.equal('404 Not Found！')
  })
})
