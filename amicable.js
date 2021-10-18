function readNum1() {
    var oNum = document.getElementById("firstNum").value;
    return oNum;
}

function readNum2() {
    var sNum = document.getElementById("secondNum").value;
    return sNum;
}

function isAFactor(num, testNum) {
    if (num % testNum == 0) {
        return true;
    }
    return false;
}

function displayArray(numArray) {
    factors = numArray;
    return factors;
}

function addFactors(numArray) {
    var sum = 0;
    for (i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }
    return sum;
}

function getFactors(number) {
    var possFactors = new Array;
    for (int = 1; int < number; int++) {
        if (isAFactor(number, int)) {
            possFactors.push(int);
        }
    }
    return possFactors;
}

function checkIfAmicable() {
    var num1 = readNum1();
    var num2 = readNum2();
    var num1Sum = addFactors(getFactors(num1));
    var num2Sum = addFactors(getFactors(num2));

    if(num1 == num2) {
        document.getElementById("results").innerHTML = "The numbers " + num1 + " and " + num2 + " are not amicable.";
    }
    else if((num1Sum == num2) && num2Sum == num1) {
        document.getElementById("results").innerHTML = "The numbers " + num1 + " and " + num2 + " are amicable!";
    }
    else {
        document.getElementById("results").innerHTML = "The numbers " + num1 + " and " + num2 + " are not amicable.";
    }
}