const sumAll = function(a,b) {
    let finalSum = 0;
    if (a>b) {
        [a, b] = [b, a];
    }
    if (a< 0 || b<0  ){
        return ('ERROR');
    }
    else if (typeof a !== 'number' || typeof b !== 'number'){return ('ERROR');}
    else if (!Number.isInteger(a) || !Number.isInteger(b)){return ('ERROR');}

    for (let i=a; i<=b;i++){
        finalSum+= i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
