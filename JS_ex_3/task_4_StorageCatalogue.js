function storeCatalogue(data) {
    
    let letterCatalogue = {};

    for (let i = 0; i < data.length; i++) {
        
        const currentProduct = data[i].split(' : ');

        const currentProductType = currentProduct[0];
        const currentProductPrice = currentProduct[1];
        const firstLetter = currentProductType[0];

         if (!(firstLetter in letterCatalogue)) {
            letterCatalogue[firstLetter]=[];
        }
        
        letterCatalogue[firstLetter].push(`${currentProductType}: ${currentProductPrice}`);      
    }

    Object.keys(letterCatalogue).sort().forEach(element => {
        console.log(element);

        letterCatalogue[element].sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        })

        letterCatalogue[element].forEach(element => {
            console.log(`  ${element}`);
        });
    });
}



storeCatalogue(
['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

)
