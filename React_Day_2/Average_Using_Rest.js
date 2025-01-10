//1. Create a function that calculates the average of numbers using rest operators.

function averageUsingRest(...allValues){
    const res=allValues.reduce((a,b) => (a+b),0);
    const avg=res/allValues.length;
    return avg;
}     

const result= averageUsingRest(10,20,30);
console.log(result);
