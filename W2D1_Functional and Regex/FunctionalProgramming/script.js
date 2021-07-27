mocha.setup("bdd");
let assert = chai.assert;
function sum() {
var args = Array.prototype.slice.call(arguments);
return args.reduce((acc, current) => acc + current, 0);
}
function multiply() {
var args = Array.prototype.slice.call(arguments);
return args.reduce((acc, current) => acc * current, 1);
}
function reverse(str) {
return str.split("").reduce((acc, current) => current + acc, "");
}
function filterLongWords(array, size){
   return array.filter(i => i.length > size);
}

describe("Sum", function () {
it("It takes number arguement, and returns the sum of each value in arguement", function () {
assert.equal(10, sum(1, 2, 3, 4));
});
});
describe("Multiply", function () {
it("It takes number arguement, and returns the product of each value in arguement", function () {
assert.equal(6, multiply(1, 2, 3));
});
});
describe("Reverse", function () {
it("It takes string, and returns the reverse of the string", function () {
assert.equal("ratset gaj", reverse("jag testar"));
});
});

describe("Filter Long Words", function () {
it("It takes array and size, and returns words with length greater than size as an array", function () {
var expected = JSON.stringify(["hello", "someone", "name"]);
var actual = filterLongWords(["hello", "hey", "bye", "someone", "name"], 3);
assert.equal(expected, JSON.stringify(actual));
});
});