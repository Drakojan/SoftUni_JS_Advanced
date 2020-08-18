function componentDB(data) {
    
    let parsedData= data.reduce((db,componentData)=>{

        let [systemName,componentName,subcomponentName] = componentData.split('|').map(x=>x.trim());

        if (!db[systemName]) {
            db[systemName] = {[componentName]: [subcomponentName]};
            return db;
        }

        if (!db[systemName][componentName]) {
            db[systemName][componentName]=[subcomponentName];
            return db;
        }

        db[systemName][componentName]=[...db[systemName][componentName],subcomponentName]

        return db;
    },{})

    console.log(parsedData)


    let sortedSystem =Object.keys(parsedData).sort((a,b)=>{

        if (parsedData[a].length!==parsedData[b].length) {

            return parsedData[a].length-parsedData[b].length
        }

        return a.localeCompare(b);

        


    }) 
}

componentDB(
    ['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'] 
    )