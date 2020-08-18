

function sameNumbers(num) {
let digitList = num.toString().split('');
let allTrue = true;

let sum = 0;

for (var i = 0; i < digitList.length; i++) {

    if (allTrue) {
        allTrue = digitList[i]===digitList[0];
    }

    sum=sum+Number(digitList[i])
}

console.log(allTrue)
console.log(sum)

}

sameNumbers(2222)

while (condition) {
    
}