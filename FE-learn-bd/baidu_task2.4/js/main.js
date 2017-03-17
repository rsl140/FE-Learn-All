var data = [];

//判断是否为数字
function getvale(){
	var num = document.getElementById("inputnum").value;
	var isNum = /^[1-9]+[0-9]*]*$/;
	if(!isNum.test(num)){
		alert("请输入数字！");
		return false;
	}
	else{
		return num;
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
	var str = document.getElementById("out");
	str.innerHTML = "";
	for (var i = 0; i < data.length; i++) {
		str.innerHTML += "<span class='layout'>"+ data[i] +"</span>"
	}
}