function carFactory(data) {
    let register = {};

    for (let i = 0; i < data.length; i++) {
        
        const currentInfo = data[i].split(' | ');

        const system = currentInfo[0];
        const component = currentInfo[1];
        const subComponent = currentInfo[2];

        if (!(system in register)) {
            register[system]={};
            
        }
        
        if (!(component in register[system])) {
            register[system][component]=[];
        }
        
        register[system][component].push(subComponent);
    }

for (const key in register) {

    Object.keys(register[key]).sort((a,b)=>{

        return register[key][a].length - register[key][b].length;

    })
}

Object.keys(register).sort((a,b)=>{
    
    if (Object.keys(register[a]).length === Object.keys(register[b]).length) {
        
       return a.localeCompare(b);
    }
    
    return register[a].length - register[b].length;

})

console.log(register)

}

carFactory(
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