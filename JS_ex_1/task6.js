
function roadRadar(params) {
    const limits = {

        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,

    }

    let speed = Number(params[0]);

    let violation = speed-limits[params[1]];

    if (violation<=0) {
        return
    }
    else if (violation<=20) {
        return console.log('speeding')
    }
    else if (violation<=40) {
        return console.log('excessive speeding')
    }
    else return console.log('reckless driving')
}

roadRadar([21, 'residential'])