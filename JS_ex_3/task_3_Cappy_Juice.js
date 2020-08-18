function cappyJuice(params) {
    let bottles = {};
    let juices = {  
    };

    for (let i = 0; i < params.length; i++) {
        
        const element = params[i].split(' => ');
        const juiceType = element[0];
        const jusiceQuantity = Number(element[1]);
    
        if (!(juiceType in juices)) {
            juices[juiceType]=0;
        }
        juices[juiceType]+=jusiceQuantity;

        if (juices[juiceType]>=1000) {
            
            if (!(juiceType in bottles)) {
                bottles[juiceType] = 0;
            }

            bottles[juiceType]+= Math.floor(juices[juiceType]/1000) // create new bottle type manually here if errors
            
            juices[juiceType]-= bottles[juiceType]*1000;
        }
    }
    
    for (const key in bottles) {
       
        console.log(`${key} => ${bottles[key]}`)
    }

}
cappyJuice(
    ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']    
)
