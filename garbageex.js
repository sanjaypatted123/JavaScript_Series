function createUser() {
    let name = "John";
    let age = 30;
    return `${name} is ${age} years old`;
  }
  
  createUser(); // Output: "John is 30 years old"


//   What Happens Here:
//   name and age are local variables inside the function createUser.
  
//   Once the function finishes executing, there are no references to name and age.
  
//   So, the JavaScript engine automatically frees the memory they used — this is garbage collection.
  
  


function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }
  
  const counter = createCounter();
  counter(); // 1
  counter(); // 2

  

//   What Happens Here:
//   createCounter() returns an inner function (a closure).
  
//   That inner function uses the outer variable count.
  
//   Even after createCounter() has finished running, count is still in memory, because 
//   it’s used by the inner function.
  
//   The memory for count will only be released if nothing references counter anymore 
//   (like setting counter = null).