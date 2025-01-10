//2. write a function to merge and destructure objects
function mergeAndDestructureObjects(obj1, obj2) {
    // Merge the two objects
    const mergedObject = { ...obj1, ...obj2 };
  
    // Destructure the merged object
    const { key1, key2, ...rest } = mergedObject;
  
    return { key1, key2, rest };
  }
  
  // Example Usage
  const obj1 = { key1: 'Shyam', key2: 'KC' };
  const obj2 = { key3: 'Chhatra', key4: 'NP' };
  
  const { key1, key2, rest } = mergeAndDestructureObjects(obj1, obj2);
  
  console.log('Key 1:', key1); // Output: Value 1
  console.log('Key 2:', key2); // Output: Value 2
  console.log('Rest:', rest);  // Output: { key3: 'Value 3', key4: 'Value 4' }
  