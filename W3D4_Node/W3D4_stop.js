const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
const getNum = function getNumber(name){
    if(name == 'stop'){
        console.log(count);
        readline.close();
    }
    else{
        count++;
        readline.question("Enter a number: ", name => {
            getNumber(name);
        })
    }
}
getNum();
