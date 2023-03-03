const removeFromArray = function(array, ...args) {
   
    for (i of args){
        let index = array.indexOf(i);
        if (index === -1) continue;
        array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
