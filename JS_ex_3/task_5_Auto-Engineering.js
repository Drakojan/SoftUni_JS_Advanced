function carFactory(data) {
    let register = {};

    for (let i = 0; i < data.length; i++) {
        
        const currentInfo = data[i].split(' | ');

        const currentCarBrand = currentInfo[0];
        const currentCarModel = currentInfo[1];
        const currentCarQuantity = Number(currentInfo[2]);

        if (!(currentCarBrand in register)) {
            register[currentCarBrand]={};
        }
        
        if (!(currentCarModel in register[currentCarBrand])) {
            register[currentCarBrand][currentCarModel]=0;
        }
        
        register[currentCarBrand][currentCarModel]+=currentCarQuantity;
    }

    Object.keys(register).forEach(element => {
        
        console.log(element);

        for (const key in register[element]) {

            console.log(`###${key} -> ${register[element][key]}`)
        }
        
    });

}

carFactory(
['Audi | Q7 | 1000',
'Audi | Q7 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)