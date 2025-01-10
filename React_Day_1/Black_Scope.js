//Black Scope
function multiply(){
    let a=10;
    const b=20;
    var result=a*b;

if(true ){
    console.log(a,b,result);
    let c=100.20;
    const d=90;
    var divideResult =c/d;
    //console.log("Inside block: ",c,d,divideResult);
}
console.log("Outside block: ",c,d,divideResult);
}