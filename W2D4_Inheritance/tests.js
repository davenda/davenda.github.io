describe("Banned Words", function(){

    it("should filter string objects that have a filter method", function(){
        assert.notEqual(String.prototype.filter, undefined);
    });

    it("should return the string after removing all the banned word", function(){
        assert.equal("this house is not nice!".filter("not"), "this house is nice!");
    });

    it("should return the string itself if the argument is empty", function(){
        assert.equal("".filter(""), "");
    });
})

describe("Bubble Sort", function(){
    it("should check if method is defined", function(){
        assert.notEqual(Array.prototype.bubbleSort, undefined);
    });

   
    it("should sort the elements in assending order", function(){
        let arr = [4,3,2,1];
        assert.deepEqual(arr.bubbleSort(), [1,2,3,4])
    });
});

describe("Inheritance of Teacher", function(){

    it("should check #describe", function(){
        assert.notEqual(Teacher.prototype.describe, undefined);
    });

    it("should return expected string", function(){
        assert.equal(new Teacher("Professor Michael").teach("WAP"), "Professor Michael is now teaching WAP");
    })
});
