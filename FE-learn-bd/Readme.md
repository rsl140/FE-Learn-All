# FE-learn-bd 百度前端学习任务

效果地址：https://rsl140.github.io/FE-Learn-All/FE-learn-bd/{项目文件夹name}

###IFE任务地址
[task1.1](http://ife.baidu.com/course/detail/id/90)<br>
[task1.4](http://ife.baidu.com/course/detail/id/95)<br>
[task2.1](http://ife.baidu.com/course/detail/id/93)<br>
[task2.2](http://ife.baidu.com/course/detail/id/91)<br>
[task2.3](http://ife.baidu.com/course/detail/id/98)<br>


###学习总结


	####slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

	从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符

	用法
```
	stringObject.slice(start,end)
```


	####sort() 方法用于对数组的元素进行排序

	如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
	若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。(负值为a在前)
	若 a 等于 b，则返回 0。
	若 a 大于 b，则返回一个大于 0 的值。(正值为b在前)
```
	var arr=[1,3,4,52010,3001,20,123]
	arr.sort(function(a,b){
		if(a < b){return -1}
		else if(a>b){return 1}
		else if(a==b){return 0}
	})

	data.sort(function(a,b){
    	return a[1] - b[1];
  	})
```