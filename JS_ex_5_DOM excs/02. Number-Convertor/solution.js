function solve() {

    let optionList = document.getElementById('selectMenuTo');
    let input = document.querySelector("#input");
    let resultBox = document.getElementById('result');

    optionList.innerHTML = 

'<option selected value=""></option>'+
'<option  value="binary">Binary</option>'+
'<option  value="hexadecimal">Hexadecimal</option>';

    let button = document.getElementsByTagName('button')[0];


    button.addEventListener('click', ()=>{

        console.log(input.value);

        let result;
        if (optionList.value==='binary') {
            
            result = Number(input.value).toString(2);
        }else{

            result = Number(input.value).toString(16).toUpperCase();
        }

        resultBox.value = result;
        
    });
}