1. 观看直播课
2. qq相册实现区分用户上传的照片功能
   1. A用户上传的话，只会看到 A用户上传的照片
   2. 用户数据可以在 users 表内写死
3. 使用 jwt 实现 qq相册的鉴权处理逻辑
   1. 实现登录接口 /login（post形式）
      1. 数据库内创建 users 表
         1. username 字段
         2. password 字段
      2. 验证账号密码
         1. 用户数据可以在 users 表内写死
      3. 登录成功后，返回 token 给前端
   2. /getPhotos 接口增加鉴权
      1. 检测 token，如果没有 token 的话，返回 401
      2. 有 token 并且验证成功的话，在返回对应的数据
   3. jwt 使用 koa-jwt 以及 jsonwebtoken 两个库来实现
   4. 前端使用 ajax 请求登录接口