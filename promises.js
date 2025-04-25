// 🌟 What is a Promise?
// A Promise in JavaScript is like a guarantee that something will happen in the future — either it will succeed (resolve) or fail (reject).

// Think of it like ordering food online:

// You place an order. 🍔

// The app promises that you will either get the food 📦 (success) or get a message saying it failed ❌ (failure).

// You wait. ⏳

// ✅ Simple Example: Ordering Food
// javascript
// Copy
// Edit
let orderFood = new Promise(function(resolve, reject) {
  let foodDelivered = true;

  if (foodDelivered) {
    resolve("Food is delivered!");
  } else {
    reject("Sorry, delivery failed.");
  }
});

orderFood.then(function(successMessage) {
  console.log("SUCCESS: " + successMessage);
}).catch(function(errorMessage) {
  console.log("FAILURE: " + errorMessage);
});
// 🔍 Breakdown of the Code
// 1. Creating a Promise:
// javascript
// Copy
// Edit
// let orderFood = new Promise(function(resolve, reject) {
// new Promise(...): Creates a new promise.

// Inside, you get two functions: resolve and reject.

// You will call resolve() when the job is successful.

// You will call reject() if something goes wrong.

// 2. Logic inside the Promise:
// javascript
// Copy
// Edit
//   let foodDelivered = true;

//   if (foodDelivered) {
//     resolve("Food is delivered!");
//   } else {
//     reject("Sorry, delivery failed.");
//   }
// });
// We check if the food was delivered.

// If foodDelivered is true, we call resolve(...) with a success message.

// If not, we call reject(...) with a failure message.

// 3. Handling the result:
// javascript
// Copy
// Edit
// orderFood.then(function(successMessage) {
//   console.log("SUCCESS: " + successMessage);
// })
// .then(...) is used to run code when the promise is successful.

// It receives the value passed by resolve().

// 4. Handling errors:
// javascript
// Copy
// Edit
// .catch(function(errorMessage) {
//   console.log("FAILURE: " + errorMessage);
// });
// .catch(...) runs if the promise is rejected.

// It receives the value passed by reject().

// 🧠 In One Line:
// A Promise says: “I’ll finish this task later. Once done, I’ll either give you a result or an error.”