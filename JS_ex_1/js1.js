var fruit = readline.console
var weight = readline.console
var price = readline.console

function Fruittask(fruit, weight, price) {

    return `I need $${((weight / 100) * price).toFixed(2)} to buy ${(weight / 100).toFixed(2)} kilograms ${fruit}.`
    }

    console.log(Fruittask(fruit, weight, price))