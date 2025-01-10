//function scope
function displayName(){
    console.log("My name is","Shyam");
}

displayName(); //function call

function add(a,b){
    var sum=0;
    sum=a+b;
    return sum;
}
var result = add(1,2);
console.log(result);
//console.log(sum);