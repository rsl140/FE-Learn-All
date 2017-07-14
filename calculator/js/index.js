var temp = "";

function numClick(num) {
    switch (num.innerHTML) {
        case '+':
        case '-':
        case '*':
        case '/':
            if (isTrue()) {
            	break;
            }
        default:
            temp += num.innerHTML;
            document.getElementById('texts').value = temp;
            break;
    }

}

function getValue() {
    document.getElementById('texts').value = eval(temp);
    temp = eval(temp);
}

function rest() {
    document.getElementById('texts').value = "";
    temp = "";
}

function delect() {
    temp = temp.slice(0, -1);
    document.getElementById('texts').value = temp;
}

function isTrue() {
    var lastChar = temp.toString().split("").pop();//提取最后一个字符
    var flag = false;
    switch (lastChar) {
        case '+':
        case '-':
        case '*':
        case '/':
            flag = true;
            break;
    }
    return flag;
}
