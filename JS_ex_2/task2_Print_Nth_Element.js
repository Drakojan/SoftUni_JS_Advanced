function printArr(inputArr) {
    let n = Number(inputArr.pop());
    
    for (let index = 0; index < inputArr.length; index+=n) {
        
        const element = inputArr[index];
        console.log(element)
    }

}

printArr(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)