# koa2 笔记

## 1. **快速开始**
### **环境准备**
+ 因为node.js v7.6.0开始完全支持async/await，不需要加flag，所以node.js环境都要7.6.0以上
+ node.js环境 版本v7.6以上
  + 直接安装node.js 7.6：node.js官网地址https://nodejs.org
  + nvm管理多版本node.js：可以用nvm 进行node版本进行管理
    + Mac系统安装nvm https://github.com/creationix/nvm#manual-install
    + windows系统安装nvm https://github.com/coreybutler/nvm-windows
    + Ubuntu系统安装nvm https://github.com/creationix/nvm
+ npm 版本3.x以上

### 1.1 **快速开始**

#### **安装koa2**
```
# 初始化package.json
npm init

# 安装koa2
npm install koa
```

#### **hello world 代码**
```
app.js
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
```
#### **启动demo**
由于koa2是基于async/await操作中间件，目前node.js 7.x的harmony模式下才能使用，所以启动的时的脚本如下：

`
node app.js
`

### 1.2 **async/await使用**

+ async是让方法变成异步,返回的是Promise。
+ await是等待异步方法执行完成,await必须在async方法中才可以使用,因为await访问本身就会造成程序停止堵塞，所以必须在异步方法中才可以使用。

### 1.3 **koa2目录结构分析**
#### 源码解析
```
├── lib
│   ├── application.js
│   ├── context.js
│   ├── request.js
│   └── response.js
└── package.json
```
这个就是 GitHub https://github.com/koajs/koa 上开源的koa2源码的源文件结构，核心代码就是lib目录下的四个文件
+ application.js 是整个koa2 的入口文件，封装了context，request，response，以及最核心的中间件处理流程。
+ context.js 处理应用上下文，里面直接封装部分request.js和response.js的方法
+ request.js 处理http请求
+ response.js 处理http响应

#### 用koa应用生成器生成对应的目录
```
 npm install koa-generator -g

 koa koa_demo

 install dependencies:
     > cd koa_demo && npm install

   run the app:
     > SET DEBUG=koa_demo:* & npm start
 ```

 ## 2. **Koa2路由**
 ### 2.1 **Koa2路由 以及 路由get传值**

 #### Koa2路由的基本使用
 路由（Routing）是由一个 URI（或者叫路径）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何响应客户端对某个网站节点的访问。
 > 通俗的讲：路由就是根据不同的URL地址，加载不同的页面实现不同的功能。

 `
 npm install --save koa-router
 `

