function sum(numbers) {
    return numbers.reduce((x, y) => x + y, 0);
}

function multiply(numbers) {
    return numbers.reduce((x, y) => x * y, 1);
}

function reverse([...string]){
    return string.reduce((x, y) => x + y, 1)//.join("");
}

function filterLongWords(array, size){
    return array.filter(i => i.length > size);
}

console.log(sum([2, 3, 5, 6]));
console.log(multiply([2, 3, 5, 6]));
console.log(reverse("jag testar"));
console.log(filterLongWords(["hello", "hey", "bye", "someone", "name"], 3));