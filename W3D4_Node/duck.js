var flying = false;
var quacking = false;
var xPos = 0;
var yPos = 0;

function takeOff(){
    flying = true;
}
function land(){
    flying = false;
}
function startQuacking(){
    quacking = true;
}
function stopQuacking(){
    quacking = false;
}
function moveTo(x, y){
    xPos = x;
    yPos = y;
    let string = 'Duck is ';
    if(flying == true){
        string += `flying to ${xPos}, ${yPos}`;
    }
    else{
        string += `swimming to ${xPos}, ${yPos}`;
    }
    if(quacking == true){
        string += " while quacking.";
    }
    console.log(string);
}
module.exports = {
    land: land,
    takeOff: takeOff,
    startQuacking: startQuacking,
    stopQuacking: stopQuacking,
    moveTo: moveTo
}
