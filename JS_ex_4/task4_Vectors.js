let solution = (function() {
    let result = {
        add: function add(vec1, vec2) {
        
            [xA, yA] = vec1;
            [xB, yB] = vec2;

            let resultX = xA+xB;
            let resultY = yA+yB;
            return [resultX, resultY]
        },

        multiply: function multiply(vec1, scalar){
            [xA, yA] = vec1;

            let resultX = xA*scalar;
            let resultY = yA*scalar;

            return [resultX, resultY]
        },

        length: function length(vec1){

            [xA, yA] = vec1;
            return Math.sqrt(xA**2 +yA**2)

        },

        dot: function dot(vec1, vec2){
        
            [xA, yA] = vec1;
            [xB, yB] = vec2;

            return xA*xB+yA*yB
        },

        cross: function cross(vec1, vec2){

            [xA, yA] = vec1;
            [xB, yB] = vec2;

            return xA*yB-yA*xB
        },
    
    };
    
    return result;
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));