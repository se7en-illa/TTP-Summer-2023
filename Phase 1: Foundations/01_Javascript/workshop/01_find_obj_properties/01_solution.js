function findObjPropsHasOwn(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  console.log(result);
  return result.join(', ');
}

//obj keys
const findObjKeys = (obj) => {
  let keys = Object.keys(obj);
  return keys.join(', ');
};

function findObjPropsHasOwnEx(obj) {
  // define the function findObjPropsHasOwn accepts 'obj' as a parameter
  let result = []; // Initialize an empty array to store the keys directly attached to the object
  for (let key in obj) {
    // start a for..in loop to iterate over all the keys in the object
    if (obj.hasOwnProperty(key)) {
      // use the hasOwnProperty method to check if the current key belongs directly to the object instance and not inherited from its prototype.
      result.push(key); // If the key is directly attached to the object, it is pushed to the result array.
    }
  }
  return result.join(', '); // returns the result array joined as a string using join(', '). This will create a string where each key is separated by a comma and a space.
}

//obj keys
function findObjKeys(obj) {
  // define findObjKeys, accepts an obj as a parameter.
  let keys = Object.keys(obj); // It uses the Object.keys method to retrieve an array of all the keys directly attached to the object instance.
  return keys.join(', '); // The array of keys is assigned to the variable keys. Finally, it returns the keys array joined as a string using join(', '). This will create a string where each key is separated by a comma and a space.
}

/*
Both functions achieve the same purpose, which is to find the keys directly attached to an object and return them as a string. 
The first solution (findObjPropsHasOwn) uses a for...in loop 
and the hasOwnProperty method, while the second solution (findObjKeys) uses the Object.keys method directly.
*/
