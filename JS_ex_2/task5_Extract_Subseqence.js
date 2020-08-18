function extract(inputArr) {

    console.log(inputArr[0])

    function reducer(accumulator, currentValue) {
        if (currentValue>=accumulator){

            console.log(currentValue);
            return currentValue;
        }
        else return accumulator;
    }
    inputArr.reduce(reducer) 
}

extract([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )