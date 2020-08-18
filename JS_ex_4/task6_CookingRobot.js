let manager = function result () {

    let storage = {

        'protein':0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    };

    let recipes = {
        apple: {'carbohydrate':1,  'flavour': 2,'protein':0,'fat':0},
        lemonade: {'carbohydrate':10,  'flavour': 20,'protein':0,'fat':0},
        burger: {'carbohydrate':5,'fat': 7, 'flavour': 3,'protein':0},
        eggs: {'protein':5,'fat': 1, 'flavour': 1,'carbohydrate':0},
        turkey: {'protein':10,'carbohydrate':10, 'fat': 10, 'flavour': 10},
    };

    function manage(data) {
        dataArr=data.split(' ');
        [command, type, quantity] = dataArr;

        switch (command) {
            case 'restock':
                storage[type]+=Number(quantity);
                console.log('Success')
                break;
            
            case 'prepare':
                let requiredProtein = recipes[type].protein*Number(quantity);
                let requiredCarbs = recipes[type].carbohydrate*Number(quantity);
                let requiredFats = recipes[type].fat*Number(quantity);
                let requiredFlavour = recipes[type].flavour*Number(quantity);

                if (storage.protein-requiredProtein<0) {
                    
                    console.log('Error: not enough protein in stock ')

                } 
                else if( storage.carbohydrate-requiredCarbs<0) {
                    console.log('Error: not enough carbohydrate in stock ')

                }
                else if(storage.flavour-requiredFlavour<0){
                    console.log('Error: not enough flavour in stock ')

                }
                else if(storage.fat-requiredFats<0){
                    console.log('Error: not enough fat in stock ')

                }
                else {
                    storage.protein-=requiredProtein;
                    storage.carbohydrate-=requiredCarbs;
                    storage.flavour-=requiredFlavour;
                    storage.fat-=requiredFats;
                    console.log('Success')};

                break;
            
                default: console.log(`protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`);
                break;
        }
    }
    return manage;
}()

manager('restock flavour 50');
manager('prepare lemonade 4');
// manager('prepare apple 1');
// manager('restock fat 10');
// manager('prepare burger 1');
// manager('report');