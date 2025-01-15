/* Promise states
1. Pendning
2. Resolved
3. Reject */

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>console.log("Processing..."),
//         resolve("Successfully Resolved"), 
//     4000,)
// });

// myPromise.then(
//     (res)=>console.log(res),
// ).catch(
//     (c)=>console.log("Error:",e)
// );

//for reject
// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>
//         reject("Something went wromg"), 
//     4000,)
// });

// myPromise.then(
//     (res)=>console.log(res),
// ).catch(
//     (e)=>console.log("Error:",e)
// );

//Async process

// function fetchData(){
//     return new Promise(
//         (resolve,reject)=>{
//             setTimeout(()=>resolve("Succesfully Resolved"),
//         4000,
//     )
//         });
// }

// async function run(){
//     console.log("Processing...")
//     const result = await fetchData()
//     console.log("Result =",result)
// }
// run();

//........................
function fetchData(url){
    return new Promise(
        (resolve,reject)=>{
            setTimeout(()=> {
                if(url=="valid"){
                    resolve("Successfully fetch data");
                }else{
                    reject("Invalid url");
                }
            } ,4000   );
})
}

async function run(){
    console.log("Processing...")
    //const result = await fetchData()
    //console.log("Result =",result)
    const successRes=await fetchData("valid")
    console.log("Success Res =",successRes)
}
run();

// async function fetchDataWithError(){
//     try{
//         const res =await fetchData()
//         console.log("Try res=",res);
//     }catch(error){
//         console.log("error =",error);
//     }
// }

// fetchDataWithError();