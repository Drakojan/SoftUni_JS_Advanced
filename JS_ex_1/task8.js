function ValidityChecker(params) {

    let p1x = params[0]
    let p1y = params[1]

    let p2x = params[2]
    let p2y = params[3]

    function pitagor(a, b) {
        return Math.sqrt(a*a+b*b);
    }

    function distanceTwoPoints(x1,y1,x2,y2) {
        return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2))
    }

    if (Number.isInteger(pitagor(p1x,p1y))) {
        
        console.log(`{${p1x}, ${p1y}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${p1x}, ${p1y}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(pitagor(p2x,p2y))) {
        
        console.log(`{${p2x}, ${p2y}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${p2x}, ${p2y}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(distanceTwoPoints(p1x,p1y,p2x,p2y))) {
        
        console.log(`{${p1x}, ${p1y}} to {${p2x}, ${p2y}} is valid`)
    }
    else{
        console.log(`{${p1x}, ${p1y}} to {${p2x}, ${p2y}} is invalid`)
    }
    
}

ValidityChecker([2, 1, 1, 1]);