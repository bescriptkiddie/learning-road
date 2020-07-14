##Node.js02



- 本节知识要点
  - 模板引擎
  - pug模板引擎
    - 安装pug
    - 循环判断
    - 混合模式
    - 插值表达式
  - nunjucks模板引擎
    - koa-nunjucks-2模块的使用
    - nunjucks在koa中的使用
    - nunjucks使用中的常用语法

- 课堂目标
  - 了解模板引擎
  - 学会pug的常用语法
  - 了解nunjucks模板引擎的常用语法
  - 会在koa中使用pug和nunjucks模板引擎

## 模板引擎

  模板引擎：模板引擎是web应用中动态生成html的工具，负责将数据和模板结合；常见模板引擎有：ejs、jade（现更名为pug）、Handlebars、Nunjucks、Swig等；使用模板引擎可以是项目结构更加清晰，结构更加合理，让项目维护变得更简单；

##pug模板引擎使用

- 安装pug

  `npm i pug -g`

- pug常用语法

  - pug语法：通过缩进关系，代替以往html的层级包含关系，如 个简单的静态   可以表达为，注意要统一使用tab或者空格缩进，不要混用
  - 内联书写层级,a: img
  - style属性：div(style={width:”200px”,color:”red”})
  - 使用”-”来定义变量，使用“=”把变量输出到元素内；
  - 通过 #{variable} 插 相应的变量值
  - html 元素属性通过在标签右边通过括号包含（可以通过判断来添加）
  - 文本通过在 字前 添加竖线符号“|”可让 jade 原样输出内容 在html标签标记后 通过空格隔开 本内容 在html标签标记后通过添加引号“.”添加块级文本
  - 注释：可以通过双斜杠进 注释，jade有3种注释 式，可以分别对应输出html 注释、 输出html注释、块级html注释
  - 循环：each val in [1,2,3]
  - 判断语句：”if  else”  case  when default 
  - mixin：混合模式
  - **include** common/footer.pug 通过include引入外部文件

- 练习工具 hade；

  `npm i hade -g`



## nunjucks模板引擎在koa中的应用

- 安装koa-nunjucks-2

- 使用nunjucks

  ```js
  const nunjucks = require('koa-nunjucks-2');
  app.use(nunjucks({
    ext:"html",   //指定模板后缀
    path:path.join(__dirname,'views'), //指定视图目录
    nunjucksConfig:{
      trimBlocks:true   //开启转义，防止xss漏洞
    }
  }))
  ```

- 推荐使用”.njk“后缀名

- nunjucks的语法使用

  - 变量：`{{username}}`

  - 注释：

    ```js
    {# Loop through all the users #}
    ```

  - if

    ```js
    {% if hungry %}
      I am hungry
    {% elif tired %}
      I am tired
    {% else %}
      I am good!
    {% endif %}
    ```

  - for

    ```js
    <h1>Posts</h1>
    <ul>
    {% for item in items %}
      <li>{{ item.title }}</li>
    {% else %}
      <li>This would display if the 'item' collection were empty</li>
    {% endfor %}
    </ul>
    ```

  - 过滤器

    ```js
    {{ foo | replace("foo", "bar") | capitalize }}
    ```

  - 模板继承block/extends

    - 定义父类模板

      ```js
      <h1>我是公共模板</h1>
          <div class="leftContent">
              {% block left %}
                  这边是左侧的内容
              {% endblock %}
              {% block right %}
                  这边是右侧的内容
              {% endblock %}
              {% block somevalue %}
                  我是一些数据
              {% endblock %}
          </div>
      ```

    - 继承父类模板

      ```js
      {% extends "common.html" %}
      {% block left %}
          我是左侧的内容1111
      {% endblock %}
      {% block right %}
          我是右侧的内容11111
      {% endblock %}
      
      {% block somevalue %}
          {{ super() }}
      {% endblock %}
      ```

      

  - Macro（宏标签）可以定义可复用的内容，类似与编程语言中的函数

    - 定义

    ```js
    {% macro pet(animalName,name="小白") %}
        <div>
            这里是一只{{animalName}};他的名字是{{name}}
        </div>
     {% endmacro %}
    
    ```

    - 调用

      ```js
      {{pet("狗狗")}}
      ```

  - include/import

    - include 引入文件

      ```js
      {% include "footer.html" %}
      ```

    - import 导入文件

      - 定义

      ```js
          {% macro pet(animalName) %}
          <p>这是一只{{animalName}}</p>
          {% endmacro %}
          {% macro book(bookName) %}
          <p>这是一本书，名字叫{{bookName}}</p>
          {% endmacro %}
      ```

      - 调用

        ````js
        {% import 'somemodule.html' as fn %}
        {{fn.pet("狗狗")}}
        {{fn.book("nodejs从入门到实践")}}
        ````

        

### 总结

- 什么是模板引擎
- pug/nunjucks模板引擎
- 表达式

- 判断语句

- 循环语句

- 宏模式

- 导入导出

  

  




