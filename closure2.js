function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  
  const counter = outer(); 
  counter(); // Output: 1
  counter(); // Output: 2

  
// Explanation:
//   The outer function defines a variable count.
  
//   It returns the inner function.
  
//   Even after outer() is done running, inner() still remembers count.
  
//   This is a closure.
  
  