// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import storeOption from './store';

const main = {
  init () {
    Vue.use(Vuex);
    Vue.use(VueRouter);

    this.loadFetch().then(() => {
      // 创建一个路由对象用于管理页面的路由
      const router = new VueRouter({
        mode: 'history',
        routes: routes
      })
      // 创建一个 store 对象用于管理应用状态
      const store = new Vuex.Store(storeOption);
      window.__lendApp__ = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
      });
    });
  },

  async loadFetch() {
    return new Promise(function (resolve) {
      window.fetch ? resolve() : require(['whatwg-fetch'], resolve);
    })
  },
}

main.init();