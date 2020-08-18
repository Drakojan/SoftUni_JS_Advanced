function printArr(inputArr) {
    let delimiter = inputArr.pop();
    
    console.log(inputArr.join(`${delimiter}`));

}

printArr(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']);
