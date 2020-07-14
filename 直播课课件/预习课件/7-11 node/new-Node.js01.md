# Node.js01

## 课堂目标

- 录播视频要点回顾
- npm 包的注册与发布
- yarn、cnpm、nvm 工具介绍
- nodejs 中路由介绍
- 新闻列表案例的 nodejs 实现

## 本节知识要点

- Node.js 安装及使用
- 通过 Node.js 搭建服务器
- 模块化及自定义模块
- 内置模块 fs 的使用
- npm、cnpm、yarn、nvm 工具的使用
- nodejs 加载页面

## nodejs 介绍

### 是什么

服务端运行坏境 runtime

### 特点

- 单线程
- 非阻塞 I/O
  - 访问文件
  - 网络请求
  - 数据库查询
  - 键盘/鼠标交互
- 事件驱动

### 用途

- 工具
  - 构建工具 webpack
  - 编译工具 babel
  - 脚手架 vue-cli
- 后端服务

## 录播视频回顾

### node 环境搭建

- 下载安装（稳定版本，尝鲜版本）
- 环境变量配置

### common.js 规范

- 自定义模块
  - 导入：require；（“./”问题）导出：module.exports 或者 exports ；
  - node_modules 里 package.json 配置；
  - node_modules 查找规则(向上查找)
- 内置模块
  - 内置模块不需要安装，外置模块需要安装；

### npm 包管理器使用

- npm i --save-dev（-D） --save（ -S ）； package.json
- -g
- npm root 、npm root -g

### 其他工具介绍

### 登录

- 注册账号：[https://www.npmjs.com/](https://www.npmjs.com/) (邮箱验证)

- npm adduser 输入刚刚注册好的用户名和密码 ；

  如果注册地址不对需要重新改回来：

  `npm config set registry https://registry.npmjs.org/` （官方地址）

  `https://registry.npm.taobao.org/` (淘宝源地址)

  查询源地址

  `npm config list`

### 发布

- npm publish 命令
- npm version major | minor | patch 命令

### cnpm 的安装使用

### yarn 包管理工具	

```shell
npm install -g yarn
```

![yarn常用指令](/Users/cxr/Work/education/web高级/08/nodejs01/courseware/assets/yarn常用指令.png)

### nvm

- nvm 是 mac 环境下管理 nodejs 的工具。在 windows 环境下推荐使用 nvmw 或者 nvm-windows；

  - Nvm-windows 下载地址 https://github.com/coreybutler/nvm-windows 下载 nvm-setup.zip

- 安装 NVM

  - 在安装 nvm 之前需要一个 c++编译器，在 mac 上可以安装 Xcode 命令工具(已经安装可以忽略)

    ```shell
    xcode-select --install
    ```

  - 使用 curl 安装

    ```shell
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
    ```

  - 或者使用 wget 来安装

    ```shell
    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
    ```

- NVM [github 的地址](https://github.com/creationix/nvm)可以查看最新版本

* NVM 常用指令；

  `nvm --version查看版本`

  `nvm install stable //安装最新稳定版nodejs`

  `nvm install 8.11.1 //安装指定版本`

  `nvm install 8.11 //安装 8.11.x系列最新版本`

  `nvm ls-remote //列出远程服务器上所有可用的版本`

  `nvm use 8.11.1 //切换到8.11.1版本`

  `nvm use 8.11 //切换到8.11.x最新版本`

  `nvm use node //切换到最新版本`

  `nvm alias default node //设置默认版本为最新版本`

  `nvm ls //列出所有已经安装的版本`

### 通过 fs 模块加载页面

- 普通方式加载页面
  - 路由区分
    - 解析 querystring
  - 加载页面
- 通过 stream 方式加载页面
  - 路由区分
  - 加载页面
  - 设置头部
  - 加载第三方资源

### 实现新闻列表页面

- 视图逻辑分离

- 读取页面
- 读取动态数据
- 设置头部引入其他资源
- 详细页显示

### 总结

- nodejs 的安装及使用
- 服务端及客户端

- 代码的前后端分离

- commonjs 模块化

- fs 模块的使用(文件操作及目录操作)

- 动态数据

- 实现新闻列表动态呈现

### 下期预告

- koa 框架

- koa-router

- koa-views

- Koa-static

- 新闻列表的 koa 实现
