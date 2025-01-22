const repeatString = function(str, num) {
    let string = '';
    if (num < 0) {  // Controlla se il numero è negativo
        return "ERROR"; } // Restituisce "ERROR" se num è negativo
    for(i=0;i<num;i++){
        string += str;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
