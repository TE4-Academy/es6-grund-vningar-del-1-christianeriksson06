const numbers = [5, 12, 8, 130, 44];
const overTen = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10){
        overTen.push(numbers[i]);
    }
}
console.log("In-värde: Array:", numbers);
console.log("Ut-värde: Array:", overTen);