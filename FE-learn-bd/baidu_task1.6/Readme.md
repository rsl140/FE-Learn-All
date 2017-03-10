#百度任务1.6 
##尝试用sass方法编写

***
`compass create sass`建立文件目录
***
利用`compass watch` 命令监听样式变动 输出css样式

***
###文本与图片浮动方式
```
	<span style="float:left;">img</span>
	<div>需要浮动的文字放这里</div>
	<span style="float:right; clear: left;">img</span>
```
###position属性
尽量不要使用relative！！！
absolute有个跟随原则可方便排版。

###css实现三角形
```
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-bottom: 10px solid #10456b;
	display: inline-block;
	vertical-align: -2px;
```