const removeFromArray = function(arr, ...valueToRemove) {
    let newArr= arr.filter(function(element){
        return !valueToRemove.includes(element);
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
