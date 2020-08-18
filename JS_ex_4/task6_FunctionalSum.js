var updatedNum=0;
function test(num) {
        
    console.log(updatedNum+num);
        
    return test;
}

console.log(test(2)(3)(5))