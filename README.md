### FIS3 angular example

##### 如何运行demo

1. 运行如下命令, 安装node_modules, 并使用 fis3 进行编译

    ```
    npm run npm
    npm run dev
    ```

2. 使用node的`serve`模块, 或者nginx, 或者其它能启动静态服务器的东西, 在当前目录启动静态服务器. 访问 `/dist_dev/index.html`

##### 目录结构

```
src
├── app.js
├── boot.js
├── index.html
├── directives
│   └── myHello/
├── modules
│   ├── deps.js
│   └── fastclick/
├── plugins
│   ├── angular/
│   ├── angular-ui-router/
│   └── mod/
├── runtimes
│   ├── configs/
│   ├── directives/
│   ├── services/
│   ├── states/
│   └── runtimes.js
├── services
│   └── ServiceA.js
└── states
    ├── bar/
    └── foo/
```

##### 各目录作用

1. `app.js`, app 定义文件. 原则上应该只有一个app定义. 但是考虑到路由部分会经常进行添加或者删除路由, 所以没有把路由的定义放到 `runtimes/configs/route.js` 中, 而是直接放到了 app.js 中
2. `boot.js`, 入口js, 此文件进行加载 `app.js`, `runtimes/runtimes.js`, 加载完毕后, 进行 angular 项目的初始化
3. `index.html`, 入口html
4. `directives`, 存放公共的directive, 以目录或者文件为单位组织.
5. `modules`, 用于存放第三方库文件, 这里的文件会被 FIS3 包裹为 amd 模块. 如果需要在项目初始时就进行加载的文件, 可以选择打包在 `modules/deps.js`文件中
6. `plugins`, 用于存放第三方库文件, 这里的文件不会被包裹为 amd 模块
7. `runtimes`, 整个项目的基础模块, 比如 FastClick, configs, services等. 这些文件会全部被打包进 `runtimes/runtimes.js` 中, 以减少初始化时加载的文件数量
8. `services`, 存放公共的services, 以目录或者文件为单位组织
9. `states`, 页面存放位置, 每个页面一个目录, 目录中存放此页面需要的 css, html, js, images, 还可以存放各页面独有的 services, directive, 等等
