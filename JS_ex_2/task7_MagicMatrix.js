function isMagic(params) {
    
    let sum = params[0].reduce((a,b) => a+b)

    let isEqual = true;

    for (let i = 1; i < params.length; i++) {
        
        const row = params[i];

        if (row.reduce((a,b)=>a+b)!==sum) {
            isEqual=false;
        }      
    }

    for (let col = 0; col < params.length; col++) {
        
        let colSum = 0;
        
        for (let row = 0; row < params.length; row++) {

            colSum+=params[row][col]      
                   
        }
        
        if (colSum!=sum) {
            isEqual=false;
        }
    }
    return console.log(isEqual);
}

isMagic(
    [[1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]]

   )