import Vue from 'vue';
import Vuex from 'vuex';
import storeOption from 'store';
import Hello from 'views/hello';
Vue.use(Vuex);
const store = new Vuex.Store(storeOption);

describe('hello.vue', () => {



  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      store,
      render: (h) => h(Hello)
    })
    expect(vm.$el.querySelector('.welcome').innerText.trim()).to.equal('欢迎使用 vue')
  })
})
