/**
 * Created by an.han on 16/10/15.
 */


// 生成 mutations 方法
function generate(name) {
  return function (state, value) {
    state[name] = value || state[name];
  }
}

const options = {

  // 多页面共享数据
  state: {
    message: '',
  },

  // 操作
  actions: {},

  // 数据变更
  mutations: {},
}

// 为每个 state 字段生成对应的 mutations 方法
Object.keys(options.state).forEach((key) => {
  options.mutations[key] = generate(key);
});

export default options;