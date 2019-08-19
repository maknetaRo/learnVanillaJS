let minValue = (a, b) => {
    if (a > b) {
        return b;
    } 
    return a;
};

console.log(minValue(5, 7))
console.log(minValue(-3, 15))
console.log(minValue(5* 3, 3))