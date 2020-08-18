function ArgumentInfo(...args){

    let types = {};

    args.forEach(element => {
        let type = typeof element; 

        console.log(`${type}: ${element}`)

        let keysArr = Object.keys(types);
    
        if (!keysArr.includes(type)) {
            
            types[type]=1;
        }
        else{
            types[type]++;
        }

    });

   let sortedTypes = Object.entries(types).sort((a,b)=>{
        return b[1]-a[1]
    })
    
    sortedTypes.forEach((el)=>{

        console.log(`${el[0]} = ${el[1]}`);
    
    })
}

ArgumentInfo({ name: 'bob'}, 3.333, 9.999)