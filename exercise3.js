const tal = [2, 4, 6, 8, 10];
let total = 0;
for (let i = 0; i < tal.length; i++) {
    total += tal[i];
}
console.log("Summa med for-loop:", total);


for (const siffra of tal) {
    console.log("Summa med for of-loop", total)
}