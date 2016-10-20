/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/hello',
  response: function (req, res) {
    res.send(`
      <p>
        To get a better understanding of how this boilerplate works, check out
        <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
        It is also recommended to go through the docs for
        <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
        <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
        If you have any issues with the setup, please file an issue at this boilerplate's
        <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
      </p>
      <p>
        You may also want to checkout
        <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
        <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
      </p>
    `);
  }
}