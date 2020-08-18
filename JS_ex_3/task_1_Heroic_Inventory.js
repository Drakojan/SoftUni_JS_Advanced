function heroRegister(params) {
    let ourRegister = [];

    for (let i = 0; i < params.length; i++) {
        let currentHeroArgs = params[i].split(' / ');
        let currentHeroItems=[]
        
        if (currentHeroArgs.length>2) {
            currentHeroItems = currentHeroArgs[2].split(', ');
        }

        let currentHero = {
            name: currentHeroArgs[0], 
            level: Number(currentHeroArgs[1]),
            items: currentHeroItems,
        }
        
        ourRegister.push(currentHero)
    }
    
    return JSON.stringify(ourRegister)
}

console.log(heroRegister(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
    ))