function Cooking(params) {
    
    let functions = {
        chop: (x) => x/2,
        dice: (x)=> Math.sqrt(x),
        spice: (x)=> x+1,
        fillet: (x) => 0.8*x,
        bake: (x)=> x*3,
    }

    let num = params[0];

    for (let i = 1; i < 6; i++) {
        let element = params[i];
        
        num = functions[element](num);
        console.log(num);
    }
}

Cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])