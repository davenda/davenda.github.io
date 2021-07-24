function max(n1, n2) { 
	if(n1 > n2){
  	return n1;
  }
  else{
  	return n2;
  }
};
console.log(max(5, 7));

function maxOfThree(n1, n2, n3) { 
	if(n1 >= n2){
  	if(n1 > n3){
    	return n1;
    }
  	return n3;
  }
  else{
  	return n2;
  }
};
console.log(maxOfThree(1 , 3, 3) );

function isVowel(letter) { 
	if(letter.length === 1){
  	    if(letter === "a" || letter === 'e' || letter === 'u' || letter === 'i' || letter === "o" || letter === "A" || letter === 'E' || letter === 'U' || letter === 'I' || letter === "O"){
            return true;
        }
    }
  return false;
};
console.log(isVowel("A"));

function sum(arr) { 
	let total = 0;
	for(let i = 0; i < arr.length; i++){
  	total += arr[i];
  }
  return total;
};

function multiply(arr) { 
	let product = 1;
	for(let i = 0; i < arr.length; i++){
  	product *= arr[i];
  }
  return product;
};
console.log(sum([2, 3, 5, 6]));
console.log(multiply([2, 3, 5, 6]));

function reverse(word) { 
	let temp = "";
  for(let i = word.length - 1; i >= 0; i--){
  	temp += word[i];
  }
  return temp;
};

console.log(reverse("jag testar"));

function findLongestWord(word) { 
	let longest = word[0].length;
  for(let i = 1; i < word.length; i++){
  	if(word[i].length > longest){
    	longest = word[i].length;
    }
  }
  return longest;
};
console.log(findLongestWord(["hello", "hey", "bye", "someone", "name"]));

function filterLongWords(word, size) { 
	let filtered = [];
  for(let i = 0; i < word.length; i++){
  	if(word[i].length > size){
    	filtered.push(word[i]);
    }
  }
  return filtered;
};

console.log(filterLongWords(["hello", "hey", "bye", "someone", "name"], 3));

function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

  
console.log("Expected output of max(5,7) is 7  " + myFunctionTest(7, max(5, 7)));
console.log("Expected output of maxOfThree(1 , 3, 3) is 3  " +  myFunctionTest(3, maxOfThree(1 , 3, 3)));
console.log("Expected output of isVowel(A) is true  " +  myFunctionTest(true, isVowel("A")));
console.log("Expected output of sum([2, 3, 5, 6]) is 16  " +  myFunctionTest(16, sum([2, 3, 5, 6])));
console.log("Expected output of multiply([2, 3, 5, 6]) is 180  " +  myFunctionTest(180, multiply([2, 3, 5, 6])));
console.log("Expected output of reverse(\"jag testar\") is ratset gaj  " +  myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of findLongestWord([\"hello\", \"hey\", \"bye\", \"someone\", \"name\"]) is 7  " +  myFunctionTest(7, findLongestWord(["hello", "hey", "bye", "someone", "name"])));
console.log("Expected output of filterLongWords([\"hello\", \"hey\", \"bye\", \"someone\", \"name\"], 3) is \"hello\", \"someone\", \"name\"  " +  myFunctionTest(["hello", "someone", "name"].toString, filterLongWords(["hello", "hey", "bye", "someone", "name"], 3).toString));