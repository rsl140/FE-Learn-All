var data = [];

//判断是否为数字
function getvale(){
	var num = document.getElementById("inputnum").value;
	var isNum = /^[1-9]+[0-9]*]*$/;
	if(!isNum.test(num)){
		alert("请输入数字！");
		return false;
	}
	else if((data.length + 1) > 60){
		alert("超出上限60个");
		return false;		
	}
	else{
		if(10 > num || num > 100){
			alert("请输入10到100的数字！");
			return false;
		}
		else{
			return num;
		}
	}
}	
//绑定点击事件
function leftIn(){
	var num = getvale();
	if (num === false) {
	}
	else{
		data.unshift(num);
		outTo();
	}
}

function rightIn(){
	var num = getvale();
	if (num === false) {
	}
	else{
		data.push(num);
		outTo();
	}
}

function leftOut(){
	var num = getvale();
	if (num === false) {
	}
	else{
		alert(data.shift());
		outTo();
	}
}

function rightOut(){
	var num = getvale();
	if (num === false) {
	}
	else{
		alert(data.pop());
		outTo();
	}
}
//遍历数组并输出
function outTo(){
	var str = document.getElementById("views");
	str.innerHTML = "";
	data.sort(function(a,b){
		return a - b;
	});
	for (var i = 0; i < data.length; i++) {
		str.innerHTML += "<div class='viewout' title='"+ data[i] +"' style='height:" + data[i] + "px'></span>";
	}
}