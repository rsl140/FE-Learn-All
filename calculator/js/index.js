var temp = "";
function numClick(num){
	temp+=num.innerHTML;
	document.getElementById('texts').value = temp;
}
function getValue(){
	document.getElementById('texts').value = eval(temp);
	temp=eval(temp);
}
function rest(){
	document.getElementById('texts').value = "";
	temp = "";
}