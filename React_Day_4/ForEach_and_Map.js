/* //ForEach
const numbers=[20,39,40,51];
numbers.forEach(
    (element,index)=>{
        console.log(`Element=${element},Index=${index}`);
        const res=element + 5;
        console.log('Result after increment= ',res);
    }
);
*/
const numbers=[20,39,40,51,99];
const n1=numbers.map(
    (element,index)=>{
        const res= element + 5;
        return res;
    }
);
console.log("modified array= ",n1);
                