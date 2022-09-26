# webpack5-config For WEB Develop

## 配置说明

> process.env.NODE_ENV 中的 NODE_ENV 是环境变量，如果没有，添加方法:`export NODE_ENV=production`(mac\linux下)。
- webpack 的命令行帮助, 可以通过 `--node-env=production` 设置环境变量NODE_ENV。

```
webpack --help
```

## 本地启动 devServer
> 执行 `"start": "webpack serve"` 启动 server后，如果webpack没有指定output，则默认是 main.js, 因此需要在devServer的 `static: "./dist"` 配置的目录下找到index.html, 在里面引入 ` <script src="main.js"></script>`.


## 插件说明

#### webpack5

- "webpack": "webpack5 核心库",
- "webpack-cli": "webpack5 命令行工具",
- "webpack-merge": "webpack5 的选项option合并"
- "webpack-dev-server": "webpack5 的开发server"

#### 处理js/ES6

- "@babel/core": "babel处理核心——必备",
- "@babel/preset-env": "根据目标兼容性生成对应版的js",
- "babel-loader": "webpack 的babel-loader",
- "babel-plugin-import": "加载外部模块（antd、lodash、axios等）时，可以按需自动导入对应的js和样式"

#### 处理css/less/scss等

- "css-minimizer-webpack-plugin": "webpack 5 内置插件——压缩css文件（默认：nano压缩库）",
- "mini-css-extract-plugin": "webpack 5 内置插件——可根据环境配置生成css文件）",

- "css-loader": "处理css的loader",
- "less-loader": "处理less的loader",
- "postcss": "postcss 核心库，可配置各种插件进行管道处理css",
- "postcss-loader": "postcss 的loader ——入口加载器",
- "postcss-preset-env": "代替autoprefixer，添加css厂商前缀",
- `可选` "postcss-reporter": "postcss 处理css的报告日志输出",
- `可选` "postcss-nested": "postcss 的内嵌css，类似less",

#### 处理image/font/等静态资源
- 已内置，不需要额外的库
#### 处理/生成html
- "html-webpack-plugin": "^5.5.0",