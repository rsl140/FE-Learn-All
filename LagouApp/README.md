# 仿拉钩webapp

## 工具使用

使用angular、less

第三方工具：bower、gulp

batarang---angular的调试工具(谷歌插件)

node v4.4.7(避免插件不兼容)
***

##单页应用

页面跳转无刷新，利用路由控制页面跳转，切换流畅、前后端分离
***

## bower使用

```
	bower init

	bower install --save angular //安装依赖文件

	null>.bowerrc//路径配置文件的创建(本次用不到)

	bower uninstall --save [文件名](移除项目)
```
***

## gulp使用

```
	npm i -g gulp //安装gulp

	npm init //初始化

	npm i --sace-dev gulp //当前文件中安装并保存在配置文件中

	npm i --save-dev gulp-clean gulp-concat gulp-connect gulp-cssmin gulp-imagemin gulp-less gulp-load-plugins gulp-plumber gulp-uglify open //模块安装
```
***
## 第三方依赖

```
	angular 

	ui.router //路由 功能更丰富 可多重嵌套等

	validation //表单验证

	ngCookies //缓存

```
***
## 目录说明

```
	build //构建代码放置目录

	dist //产品发布(压缩)

	src //源码

	test //单元测试，集成测试

    开发页面：

	view //视图存放

	controller //业务逻辑存放目录 

		directive //公共指令存放

	service //服务指令存放

	filter //过滤器
```