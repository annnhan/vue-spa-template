import Vue from 'vue';
import Vuex from 'vuex';
import storeOption from 'store';
import Title from 'components/title';

Vue.use(Vuex);
const store = new Vuex.Store(storeOption);

describe('title.vue', () => {
  let vm;
  const txt = 'Hello Vue!';

  beforeEach(function(done) {
    vm = new Vue({
      el: document.createElement('div'),
      store,
      render: (h) => h(Title, {
        props: {
          text: txt
        }
      }),
      mounted: done
    });
  });

  it('document title will be the props', () => {
    expect(document.title).to.equal(txt);
  })
})
