const caesar = function(str, shift) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    let newString = ''

    for (i = 0 ; i < str.length ; i++){
        let ltr = str[i].toLowerCase()
        let idx = abc.indexOf(ltr)
        if (idx == -1) {
            newString += str[i]; 
            continue;
        }

        let newIdx = idx + shift;
        while (newIdx > 25) newIdx = newIdx - 26;
        while (newIdx < 0) newIdx = abc.length + newIdx;
        if (str[i] === str[i].toUpperCase()){
            newString += abc[newIdx].toUpperCase()
            continue;
        }
        newString += abc[newIdx];
        

    }

    return newString;
};

// Do not edit below this line
module.exports = caesar;
