function customSort(inputArr) {
    
    inputArr.forEach(element => {
        element.toLowerCase();
    });

    function sorter(a,b) {
        
        let internalArr=[a,b];
        if (a.length > b.length) {
            return 1;
        }
        else if (a.length<b.length) {
            return -1; 
        }
        else internalArr.sort(); 
        if (internalArr[0]===a) {
            return -1;
        }
        else if (internalArr[0]===b) {
            return 1;
        }
        else return 0;
        
    }
    inputArr.sort(sorter);
    inputArr.forEach(element => {
        console.log(element);
    });
}

customSort(['test', 
'Deny', 
'omen', 
'Default']
)