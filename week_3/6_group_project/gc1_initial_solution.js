// My role in the group is:
// Person 3, Code Writer

// make a summer
// make it return the sum of group of numbers
// make it return the sum of a group of numbers whose count is even
// make it return the sum of a group of numbers whose count is odd
// make an averager
// make it return the average of a group of numbers
// make it return the average of a group of numbers whose count is even
// make it return the average of a group of numbers whose count is odd
// make a medianer
// make it return the median of a group of numbers
// make it return the median of a group of numbers whose count is even
// make it return the median of a group of numbers whose count is odd

// Here is my part of the challenge:

var numArray=[1,2,3,4,5,6];
function add(){
    for (var i=0;i<numArray.length;i++){
        var result=+numArray[i];
        return result;
    }
    }
    
function addOdd(){
    if (numArray.length%2===0){
        console.log("not odd length");
    }else{
        add();
    }
}

function addEven(){
     if (numArray.length%2!==0){
        console.log("not even length");
    }else{
        add();
    }
}

function avg(){
    for (var i=0;i<numArray.length;i++){
    var result=+numArray[i];
    return result/numArray.length;
    }
}

function avgOdd(){
     if (numArray.length%2===0){
        console.log("not odd length");
    }else{
        avg();
    }
}

function avgEven(){
     if (numArray.length%2!==0){
        console.log("not even length");
    }else{
        avg();
    }
}
function med(){
    numArray.sort(function(a, b){return a-b});
    var half = Math.ceil(numArray.length/2);
 
    if(values.length%2!==0){
        return values[half];
    } else{
        return (values[half-1] + values[half]) / 2;
         }
 
}
