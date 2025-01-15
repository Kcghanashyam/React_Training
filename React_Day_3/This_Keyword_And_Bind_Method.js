const personObj={
    name:"Ghanshyam K.C",
    greet(){
        console.log("Hello:",this.name);  //Here this is used to call the name within personObj
    }
};
console.log(personObj);
personObj.greet();

//Same as above but using arroow function
//avoid this keyword in arrow function
const pObj2={
    name:"Ram",
    greet:()=>console.log(`Hello ${this.name}`),
}
pObj2.greet();

const p3={
    age: 1000,
    showAge: function showAge(name){
        console.log(`Age of ${name} is ${this.age}`);
    }
};
const showAgeOfAnish = p3.showAge.bind(p3,"Anish");
showAgeOfAnish("Anish");