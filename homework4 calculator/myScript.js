
window.onload = function() {
	var wrapper = document.getElementsByClassName("btn-wrapper")[0];
	wrapper.addEventListener("click", handleBtnClick);
};

function handleClick (event) {
	var element = event.target;
	var text = element.innerText;
	if (isNaN(text)) {
		command(text);
	} else if (text == "=") {
		computer();
	} else if (text == "←") {
		delOne();
	} else if (text == "✖") {
		delAll();
	} else {
		addSymbol(text);
	}
}

var poly = document.getElementById("outText");
var afterComputer = false;
function command(num) {
	if (afterComputer) {
		poly.value = "";
		afterComputer = false;
	}
	var str = poly.value;
	str = (str == "0" ? "":str);
	str += num;
	poly.value = str;
}

function delOne() {
	if (afterComputer) {
		poly.value = "0";
		afterComputer = false;
	} else {
		var str = poly.value;
		str = (str == "0" ? "":str);
		poly.value = str.substring(0,str.length - 1);
	}
}

function delAll() {
	poly.value = "0";
}

function addSymbol(sym) {
	if (afterComputer) {
		afterComputer = false;
	}
	var str = poly.value;
	if (isNaN(str[str.length-1]) && sym != "-") {
		alert("表达式格式有误，请修改");
	} else {
		str += sym;
		poly.value = str;
	}
}

function computer() {

	var str = poly.value;
	if (isNaN(str[str.length-1])) {
		alert("表达式格式有误，请修改");
	}
	// str = eval(str);
	// str = parseFloat(str);
	// str = parseFloat(str.toFixed(12));
	// poly.value = str;
	poly.value = eval(str);
	afterComputer = true;
}