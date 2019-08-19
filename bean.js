const countBs = string => {
    let newArray = []
    for (i=0; i < string.length; i++) {
        if (string[i] === "B") {
            newArray.push(string[i]);
        }
    }
    return newArray.length
    
};

console.log(countBs("BarBara"));
console.log(countBs("barakuda"));

let countChar = (string, letter) => {
    newArray = []
    for (i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            newArray.push(string[i]);
        };
    };
    return newArray.length
};

console.log(countChar("I love JavaScript", "a"));