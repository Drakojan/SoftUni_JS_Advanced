
function calorieObject(params) {
    
    let calorieObj = {};

    for (let i = 0; i < params.length; i+=2) {
        let product = params[i];
        let calories = Number(params[i+1]);

        calorieObj[product]=calories;
    }
    return calorieObj;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))