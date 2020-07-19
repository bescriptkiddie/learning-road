##Nodejs03 





##<img src="assets/logo.jpg" style="float:left;width:120px;margin-top:-48px;" />

- 课堂目标
  - 学会mysql数据库的安装及使用
  - 掌握常用的sql语句；
  - 会使用mysql2模块；
  - 会实现curd操作；
- 本节知识要点
  - 数据持久化保存
  
  - mysql安装介绍
  
  - mysql的数据库及表操作
  
  - 常用sql语句实现curd操作
  
    
  
  - nodejs中mysql2模块连接mysql
  
  - 新闻列表数据的mysql存储



### 数据持久化保存

- 服务端
  - 数据库：mysql、mongodb、redis、oracle
  - 文件存储 ：fs
- 客户端
  - 本地缓存 locastorage  、 sessionStorage、cookie...

### 一、数据库

数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。



###  一 mysql数据库安装

- mac下安装 地址：https://dev.mysql.com/downloads/mysql/下载
- 设置密码
  - `cd /usr/local/mysql/bin/`
  - `./mysql -u root -p`
  - `set password for 用户名@localhost = password('新密码');`
  - 通过navicate连接
- windows下安装mysql
- 下载地址https://dev.mysql.com/downloads/mysql/
  - 下载安装包



### 二、mysql操作

​	1.命令操作；2.图形化操作；3.代码操作

- 进入mysql命令环境；

  - Mysql -u用户名 -p
  - 命令用“;”隔开
    - 显示mysql版本  SELECT VERSION(); SELECT USER(); 关键字大写；

- 数据库操作

  - 创建数据库 CREATE DATABASE 数据库名;  
  - 显示数据库 SHOW DATABASES;
  -  查看数据库信息 SHOW CREATE DATABASE 数据库名
  - 修改数据库编码格式 ALTER  DATABASE 数据库名 CHARACTER SET = utf8
  - 删除数据库  DROP DATABASE 数据库名；

- 数据库中的表操作

  - 选择数据库  USE 数据库名 ；

  - 查看当前选择的数据库： SELECT DATABASE();

  - 创建数据表： CREATE TABLE tablename()；

    ```sql
    CREATE TABLE users(
    	username VARCHAR(20),
    	age TINYINT UNSIGNED,
    	salary FLOAT(8,2) UNSIGNED
    )
    ```

  - 查看数据表   SHOW TABLES;

  - 查看数据表的结构 SHOW COLUMNS FROM 表名 ； 查看数据表的结构；

  - 数据库中字段的类型
  
  - 数值类型

<table class="reference">
<tbody>
<tr>
<th width="10%">
类型
</th>
<th width="15%">
大小
</th>
<th width="30%">
范围（有符号）
</th>
<th width="30%">
范围（无符号）
</th>
<th width="15%">
用途
</th>
</tr>
<tr>
<td>
TINYINT
</td>
<td>
1 字节
</td>
<td>
(-128，127)
</td>
<td>
(0，255)
</td>
<td>
小整数值
</td>
</tr>
<tr>
<td>
SMALLINT
</td>
<td>
2 字节
</td>
<td>
(-32 768，32 767)
</td>
<td>
(0，65 535)
</td>
<td>
大整数值
</td>
</tr>
<tr>
<td>
MEDIUMINT
</td>
<td>
3 字节
</td>
<td>
(-8 388 608，8 388 607)
</td>
<td>
(0，16 777 215)
</td>
<td>
大整数值
</td>
</tr>
<tr>
<td>
INT或INTEGER
</td>
<td>
4 字节
</td>
<td>
(-2 147 483 648，2 147 483 647)
</td>
<td>
(0，4 294 967 295)
</td>
<td>
大整数值
</td>
</tr>
<tr>
<td>
BIGINT
</td>
<td>
8 字节
</td>
<td>
(-9,223,372,036,854,775,808，9 223 372 036 854 775 807)
</td>
<td>
(0，18 446 744 073 709 551 615)
</td>
<td>
极大整数值
</td>
</tr>
<tr>
<td>
FLOAT
</td>
<td>
4 字节
</td>
<td>
(-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38) 
</td>
<td>
0，(1.175 494 351 E-38，3.402 823 466 E+38)
</td>
<td>
单精度<br>浮点数值
</td>
</tr>
<tr>
<td>
DOUBLE
</td>
<td>
8 字节
</td>
<td>
(-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)
</td>
<td>
0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)
</td>
<td>
双精度<br>浮点数值
</td>
</tr>
<tr>
<td>
DECIMAL
</td>
<td>
对DECIMAL(M,D) ，如果M&gt;D，为M+2否则为D+2
</td>
<td>
依赖于M和D的值
</td>
<td>
依赖于M和D的值
</td>
<td>
小数值
</td>
</tr>
</tbody>
</table>

- 时间日期类型

<table class="reference">
<tbody>
<tr>
<th width="10%">
类型
</th>
<th width="10%">
大小<br>(字节)
</th>
<th width="40%">
范围
</th>
<th width="20%">
格式
</th>
<th>
用途
</th>
</tr>
<tr>
<td width="10%">
DATE
</td>
<td width="10%">
3
</td>
<td>
1000-01-01/9999-12-31
</td>
<td>
YYYY-MM-DD
</td>
<td>
日期值
</td>
</tr>
<tr>
<td width="10%">
TIME
</td>
<td width="10%">
3
</td>
<td>
'-838:59:59'/'838:59:59'
</td>
<td>
HH:MM:SS
</td>
<td>
时间值或持续时间
</td>
</tr>
<tr>
<td width="10%">
YEAR
</td>
<td width="10%">
1
</td>
<td>
1901/2155
</td>
<td>
YYYY
</td>
<td>
年份值
</td>
</tr>
<tr>
<td width="10%">
DATETIME
</td>
<td width="10%">
8
</td>
<td width="40%">
1000-01-01 00:00:00/9999-12-31 23:59:59
</td>
<td>
YYYY-MM-DD HH:MM:SS
</td>
<td>
混合日期和时间值
</td>
</tr>
<tr>
<td width="10%">
TIMESTAMP
</td>
<td width="10%">
4
</td>
<td width="40%">
<p>1970-01-01 00:00:00/2038 </p>
<p>结束时间是第 <strong>2147483647</strong> 秒，北京时间 <strong>2038-1-19 11:14:07</strong>，格林尼治时间 2038年1月19日 凌晨 03:14:07</p>
</td>
<td>
YYYYMMDD HHMMSS
</td>
<td>
混合日期和时间值，时间戳
</td>
</tr>
</tbody>
</table>


- 字符串类型

  <table class="reference">
  <tbody>
  <tr>
  <th width="20%">
  类型
  </th>
  <th width="25%">
  大小
  </th>
  <th width="55%">
  用途
  </th>
  </tr>
  <tr>
  <td>
  CHAR
  </td>
  <td>
  0-255字节
  </td>
  <td>
  定长字符串
  </td>
  </tr>
  <tr>
  <td>
  VARCHAR
  </td>
  <td>
  0-65535 字节
  </td>
  <td>
  变长字符串
  </td>
  </tr>
  <tr>
  <td>
  TINYBLOB
  </td>
  <td>
  0-255字节
  </td>
  <td>
  不超过 255 个字符的二进制字符串
  </td>
  </tr>
  <tr>
  <td>
  TINYTEXT
  </td>
  <td>
  0-255字节
  </td>
  <td>
  短文本字符串
  </td>
  </tr>
  <tr>
  <td>
  BLOB
  </td>
  <td>
  0-65 535字节
  </td>
  <td>
  二进制形式的长文本数据
  </td>
  </tr>
  <tr>
  <td>
  TEXT
  </td>
  <td>
  0-65 535字节
  </td>
  <td>
  长文本数据
  </td>
  </tr>
  <tr>
  <td>
  MEDIUMBLOB
  </td>
  <td>
  0-16 777 215字节
  </td>
  <td>
  二进制形式的中等长度文本数据
  </td>
  </tr>
  <tr>
  <td>
  MEDIUMTEXT
  </td>
  <td>
  0-16 777 215字节
  </td>
  <td>
  中等长度文本数据
  </td>
  </tr>
  <tr>
  <td>
  LONGBLOB
  </td>
  <td>
  0-4 294 967 295字节
  </td>
  <td>
  二进制形式的极大文本数据
  </td>
  </tr>
  <tr>
  <td>
  LONGTEXT
  </td>
  <td>
  0-4 294 967 295字节
  </td>
  <td>
  极大文本数据
  </td>
  </tr>
  </tbody>
  </table>

- 图形化操作

  - navicat图形化
  - mysqlworkbeach  

- 数据库中的数据操作 curd操作；

  - 一、增  

     	`INSERT INTO 表名 (字段一,字段二,字段三) VALUES ("值一","值二","值三");`

  -  二、删

    `DELETE FROM 表名 WHERE 条件;`

  - 三、改

    `UPDATE 表名  SET 设置的内容  WHERE 条件语句；`

  - 四、查

    `SELECT 字段  FROM 表名  WHERE  条件语句；`

  - 五、条件语句；

    1.ADN  2 OR  3. ORDER BY  (DESC/ASC)  4.LIMIT  5.LIKE 6.JOIN ON  7.AS 

### 三、nodejs中mysql2模块

​			



### 总结

- 数据持久化保存
- mysql安装介绍
- mysql的数据库及表操作
- 常用sql语句实现curd操作
- nodejs中mysql2模块连接mysql
- 新闻列表数据的mysql存储

### 下期预告

- Nodejs04

  




