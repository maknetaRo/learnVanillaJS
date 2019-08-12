
let billAmount = 0;
let tipRate = 0;

billAmount = prompt("Bill amount: ");
tipRate = prompt("Tip %: ")

while (billAmount < 0 || tipRate < 0) {
    alert("Please enter a postive number. ")
    billAmount = prompt("Bill amount: ");
    tipRate = prompt("Tip %: ")
}
    
let total = 0;
let tip = 0;

billAmount = Number(billAmount);
tipRate = Number(tipRate);

alert(`Your bill amount without tip is: ${billAmount}`);
alert(`The tip percentage is ${tipRate} %.`);

tip = Math.round((billAmount * tipRate / 100) * 100) / 100
total = Math.round((tip + billAmount) * 100 ) / 100



alert(`The tip is: $ ${tip}.`)
alert(`Total bill is $ ${total}.`)