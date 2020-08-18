function rotate(stringArr) {
    
    let n = stringArr.pop();

    n = Math.floor(n%stringArr.length);
    
    for (let i = 0; i < n; i++) {
        
        let symbol = stringArr.pop();
        stringArr.unshift(symbol);
    }

    console.log(stringArr.join(' '))
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']

)