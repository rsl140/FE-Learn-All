var temp = "";

function numClick(num) {
    switch (num.innerHTML) {
        case '+':
        case '-':
        case '*':
        case '/':
            if (!isTrue()) {
            	temp += num.innerHTML;
            	document.getElementById('texts').value = temp;
            }
            break;
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
    var lastChar = temp.substr(temp.length - 1);
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
