const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 17 },
    { id: 3, name: 'Charlie', age: 19 },
    { id: 4, name: 'David', age: 15 },
    { id: 5, name: 'Eve', age: 22 }
  ];
  
  // Step 1: Filter out users below 18
  const adultUsers = users.filter(user => user.age >= 18);
  
  // Step 2: Create a new array of users for the remaining users
  const newUserArray = [...adultUsers]; // or simply use `adultUsers` since it's already a new array
  
  console.log(newUserArray);
  