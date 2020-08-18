function addItem() {
    let inputTextBox = document.getElementById('newItemText');
    let valueBox = document.getElementById('newItemValue');

    let inputText = inputTextBox.value;
    let value= valueBox.value;

    let newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent=inputText;

    let selectBox = document.getElementById('menu');

    selectBox.appendChild(newOption);

    inputTextBox.value = '';
    valueBox.value = '';
}