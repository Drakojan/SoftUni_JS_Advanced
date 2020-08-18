function printArr(inputArr) {
    
    let n = 1;
    let result = [];

    for (let index = 0; index < inputArr.length; index++) {
        
        const word = inputArr[index];
        
        if (word === 'add') {
            result.push(n);
        }
        else result.pop();
        n++;
    }

    if (result.length===0) {
        console.log('Empty')
    }
    else{
        result.forEach(element => {
            console.log(element);
        });
    }
}

printArr(['remove', 
'remove', 
'remove']
)