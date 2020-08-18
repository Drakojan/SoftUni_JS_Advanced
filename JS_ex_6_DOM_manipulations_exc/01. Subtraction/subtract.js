function subtract() {
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    let resultBox = document.getElementById('result');


    resultBox.textContent = Number(firstNumber.value)-secondNumber.value;
}