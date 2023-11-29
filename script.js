function sum(a, b){
    return a + b;
}

function capitalize(string){
    if (string.length === 0) return "";
    return `${string.at(0).toUpperCase()}${string.slice(1)}`
}

function reverse(string){
    if (string.length === 0) return "";
    return string.split("").reverse().join("");
}

const calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    }, 
    divide: function(a, b){
        return a / b;
    },
    multiply: function(a, b){
        return a * b;
    }
}

function caesarCipher(string, shiftFactor){
    if (string.length === 0) return "";

    let newString = "";

    string.split("").forEach((char) => {
        if (char.toLowerCase() === char.toUpperCase()){
            newString += `${char}`;
        } 
        
        else {  
            let ascii = char.charCodeAt(0);
            let temp = shiftFactor;

            if (char === char.toLowerCase()){
                while(ascii + temp > 122){
                    temp -= (122 - ascii + 1);
                    if(ascii != 97) ascii = 97;
                }
                newString += `${String.fromCharCode(ascii + temp)}`;
            }

            if (char === char.toUpperCase()){
                while(ascii + temp > 90){
                    temp -= (90 - ascii + 1);
                    if (ascii != 65) ascii = 65;
                }
                newString += `${String.fromCharCode(ascii + temp)}`;
            }
        }
    })
    return newString;
}

function analyzeArray(arr){
    const length = arr.length;
    arr = arr.filter((e) => e != undefined);    // Removing Holes
    arr = arr.map((e) => +e);   // For changing element type from string to int
    return {
        average: arr.reduce((sum, curr) => sum + curr) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length
    }
}

module.exports = {sum, capitalize, reverse, calculator, caesarCipher, analyzeArray};