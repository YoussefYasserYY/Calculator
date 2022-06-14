var result="";
var num1="";
var num2="";
var op;
var x = false


function Clear() {
    document.getElementById("display").value = ""
    num1 = "";
    num2 = "";
    result = "";
}

function plus()
{
    document.getElementById("display").value = ""
    document.getElementById("display").value += " + "
    op = '+';
    x = true;
}

function subtraction() {
    document.getElementById("display").value = ""
    document.getElementById("display").value += " - "
    x = true;
    op = '-';
}
function multiplication() {
    document.getElementById("display").value = ""
    document.getElementById("display").value += " * "
    x = true;
    op = '*';
}
function divide() {
    document.getElementById("display").value = ""
    document.getElementById("display").value += " / "
    x = true;
    op = '/';
}


function store(num)
{
    if (x == true) {
        num2 = num2 + num;
        document.getElementById("display").value = num2;
    }
    else if (x == false && result == "") {
        document.getElementById("display").value = ""
        num1 = num + num1;
        document.getElementById("display").value = num1;
        result = "2";
    }
    else
    {
        num1 = num1 + num;
        document.getElementById("display").value = num1;
    }
}

function equal()
{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (op == '+')
    {
        result = num1 + num2;
    }
    if (op == '/')
    {
        result = num1 / num2;
    }
    if (op == '-')
    {
        result = num1 - num2;
    }
    if (op == '*')
    {
        result = num1 * num2;
    }
    document.getElementById("display").value = result;
    num1 = "";
    num2 = "";
    result = "";
    x = false;
}   

