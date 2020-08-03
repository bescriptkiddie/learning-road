## 前后端交互01



## 课堂主题

​	1）XMLHttpRequest对象的使用

​	2）ajax的封装使用

​	3）利用 node 搭建服务器提供数据

​	4）FormData 对象的使用

​	5）利用 formData 实现多文件上传

​	6）qq空间批量上传图片案例

## 课堂目标

- XMLhttpRequet的使用

- 会使用ajax进行数据交互

- 会使用node搭建服务器

- 学会使用FormData来上传文件






## 视频回顾

- 会使用XMLHttpRequest对象实现数据交互

  - 服务端：

    ```js
    const Koa = require("koa");
    const static = require("koa-static");
    const Router = require("koa-router");
    const koaBody = require("koa-body");
    
    let app = new Koa();
    let router = new Router();
    app.use(static(__dirname+"/static"));
    app.use(koaBody({
        multipart:true
    }))
    router.get("/",ctx=>{
        ctx.body = "some value...";
    })
    app.use(router.routes());
    app.listen(8989);
    ```

    

  - post头部设置

- onreadystatechange服务器响应信息

  - onload  和onreadystatechange；

- FormData对象上传文件

  - upload事件
    - onloadstart   上传开始
    - onprogress  数据传输进行中
      - evt.total ：需要传输的总大小；
      - evt.loaded :当前上传的文件大小；
    - onabort 上传操作终止
    - onerror  上传失败
    - onload 上传成功
    - onloadend 上传完成（不论成功与否）



## ajax封装

- 封装成类似下面形式

```js
			ajax({
            url: "/xml",
            method: "post",
            data: {
                hello: "你好",
                height: "178cm"
            },
            success(res) {
                console.log(res)
            }
        })
```

## 通过formData实现《qq空间批量上传图片》

- 需求确定 
  - 相册内容显示相册
- nodejs搭建后台
- 分析上传元素
  - 登录区分不同用户
  - 创建上传对象
  - 上传图片
  - 获取上传后的最新图片数据

##总结

​	1）XMLHttpRequest对象的使用

​	2）ajax的封装使用

​	3）利用node搭建服务器提供数据

​	4）FormData对象的使用

​	5）利用formData实现多文件上传

​	6）通过async和await处理异步

​	7）qq空间批量上传图片案例

## 下期预告

​	前后端交互02

