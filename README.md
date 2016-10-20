## 项目简介

基于 vue.js 的前端项目模板，主要用于前后端分离后的单页应用开发，可以在开发时使用 ES2015、scss 等最新语言特性。项目包含：

- 基础库: `vue.js`、`vue-router`、`vuex`、`whatwg-fetch`
- 编译/打包工具：`webpack`、`babel`、`node-sass`
- 单元测试工具：`karma`、`mocha`、`sinon-chai`
- 本地服务器：`express`

## 目录结构

    ├── README.md                       项目介绍
    ├── index.html                      入口页面
    ├── build                           构建脚本目录
    │   ├── build-server.js                 运行本地构建服务器，可以访问构建后的页面
    │   ├── build.js                        生产环境构建脚本
    │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
    │   ├── dev-server.js                   运行本地开发服务器
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                          项目配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    │   └── test.env.js                     测试环境变量
    ├── mock                            mock数据目录
    │   └── hello.js
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── src                             源码目录    
    │   ├── main.js                         入口js文件
    │   ├── app.vue                         根组件
    │   ├── components                      公共组件目录
    │   │   └── title.vue
    │   ├── assets                          资源目录，这里的资源会被wabpack构建
    │   │   └── images
    │   │       └── logo.png
    │   ├── routes                          前端路由
    │   │   └── index.js
    │   ├── store                           应用级数据（state）
    │   │   └── index.js
    │   └── views                           页面目录
    │       ├── hello.vue
    │       └── notfound.vue
    ├── static                          纯静态资源，不会被wabpack构建。
    └── test                            测试文件目录（unit&e2e）
        └── unit                            单元测试
            ├── index.js                        入口脚本
            ├── karma.conf.js                   karma配置文件
            └── specs                           单测case目录
                └── Hello.spec.js

## 环境安装

本项目依赖 node.js， 使用前先安装 node.js 和 cnpm（显著提升依赖包的下载速度）。
1. 自行下载并安装 node.js： [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. 然后安装 cnpm 命令：

        npm install -g cnpm --registry=https://registry.npm.taobao.org


## 快速开始

    git clone git@gitlab.puhuitech.cn:lend-fe/vue-spa-template.git
    cd vue-spa-template
    cnpm install
    npm run dev

## 命令列表：

    #开启本地开发服务器，监控项目文件的变化，实时构建并自动刷新浏览器，浏览器访问 http://localhost:8081
    npm run dev

    #使用生产环境配置构建项目，构建好的文件会输出到 "dist" 目录，
    npm run build

    #运行构建服务器，可以查看构建的页面
    npm run build-server

    #运行单元测试
    npm run unit
    
## 前后端分离

项目基于 spa 方式实现前后端分离，后端将所有 url 都返回到同一个 jsp 页面（由前端提供），此 jsp 页面也是前端的入口页面。然后路由由前端控制（基于vue-router），根据不同的 url 加载相应数据和组件进行渲染。
在开发中，前后端只需定义好接口格式，前端通过 mock 的方式，即可开始编码，无需等待后端接口 ready。

## 模块化

开发时可以使用 ES2015 module 语法，构建时每个文件会编译成 amd 模块。

## 组件化

整个应用通过 vue 组件的方式搭建起来，通过 vue-router 控制相应组件的展现，组件树结构如下：

    app.vue                         根组件（整个应用只有一个）
        ├──view1.vue                    页面级组件，放在 views 目录里面，有子组件时，可以建立子目录
        │   ├──component1.vue               功能组件，公用的放在 components 目录，否则放在 views 子目录
        │   ├──component2.vue
        │   └──component3.vue
        ├──view2.vue
        │   ├──component1.vue
        │   └──component4.vue
        └──view3.vue
            ├──component5.vue
            ……


## 单元测试

可以为每个组件编写单元测试，放在 `test/unit/specs` 目录下面, 单元测试用例的目录结构建议和测试的文件保持一致（相对于src），每个测试用例文件名以 `.spec.js`结尾。
执行 `npm run unit` 时会遍历所有的 `spec.js` 文件，产出测试报告在 `test/unit/coverage` 目录。


## 联调方式

前后端分离后，由于服务端和前端的开发环境处于2台不同的机器上，后端工程里面的入口 jsp 中引用的 js 文件地址需要指向前端环境中的地址，联调时才能显示最新的修改。
主要有2种实现方式：

1. jsp 文件引用一个固定域名（如 debughost）的 js 文件， 后端机器上通过修改此域名的ip指向前端机器，达到引入前端环境 js 的目的。
2. jsp 文件通过获取一个url参数（如 debughost）的值，这个值为前端机器的 ip 地址，再动态的插入一个 script 标签引入这个 ip 的前端 js 文件。

举个例子，假设前端机器的 ip 为 172.16.36.90，需要加载前端的js文件地址为：`http://172.16.36.90:8081/main.js`， 那么后端同学的机器中需要在 host 文件加一条记录：`172.16.36.90 debughost`。
而入口 jsp 页面中则通过以下代码开加载前端js： 

    var debughost = 'debughost';
    location.search.substr(1).split('&').forEach(function (item) {
        var arr = item.split('=');
        var key = arr[0];
        var value = arr[1];
        if (key === 'debughost') {
            debughost = value;
        }
    });
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://' + debughost + ':8081/main.js?' + (new Date()).getTime();
    document.head.appendChild(script);

这样，jsp页面默认会加载 `http://debughost:8081/main.js`这个文件。
此外，如果不想用 debughost 这个域名的 js 文件，访问 jsp 时候还可以通过 url 带入 debughost 参数来指定前端 ip 。

## 部署方案

分离后前后端代码会存放在2个单独的 git 仓库中，构建过程也是分开的。后端构建时，需要依赖前端的构建结果。具体流程如下：

1. pull 前端项目代码
2. 构建前端（构建结果放在dist目录）
3. pull 后端代码
4. 将前端的构建结果（dist目录里的文件）复制到后端工程中
5. 构建后端

提测时，此过程可以借助 jenkins 配置。上线时，需要运维同学配合修改上线脚本。


## 相关资源

- vue.js 官网：[https://vuejs.org/](https://vuejs.org/)
- vue-router 文档：[http://router.vuejs.org/zh-cn/index.html/](http://router.vuejs.org/zh-cn/index.html)
- vuex 文档：[http://vuex.vuejs.org/](http://vuex.vuejs.org/)
- webpack 文档：[https://webpack.github.io/docs/](https://webpack.github.io/docs/)
- ES2015 入门教程：[http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)
- scss 文档：[http://sass-lang.com/documentation/file.SASS_REFERENCE.html](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- mocha 文档: [http://mochajs.org/](http://mochajs.org/)
- express 中文官网：[http://expressjs.com/zh-cn/](http://expressjs.com/zh-cn/) 