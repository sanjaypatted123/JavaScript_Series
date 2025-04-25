// 🧠 What are async and await?
// In JavaScript, async and await help you write code that waits for something to finish (like loading data from a server), but in a way that’s easy to read and looks like normal code.

// Without async/await, we use promises or callbacks, which can be messy. async/await makes it look cleaner.

// 🔧 Basic Concepts:
// async makes a function return a promise.

// await is used inside an async function to pause the function until a promise is done (resolved).

// ✅ Simple Example:
// Let’s say we are cooking rice. First, we boil water (takes time), and only after it boils, we add rice.

// 🍚 Code:
// javascript
// Copy
// Edit
// // A fake function that takes time to "boil water"
function boilWater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Water is boiled!");
    }, 2000); // waits 2 seconds
  });
}

// // An async function using await
async function cookRice() {
  console.log("Start cooking...");

//   // Wait for water to boil
  const boiled = await boilWater();
  console.log(boiled); // "Water is boiled!"

  console.log("Add rice now.");
}

// // Call the function
// cookRice();
// 🧩 Breakdown Line by Line:
// 1. function boilWater() { ... }
// A normal function that returns a promise.

// setTimeout(...) waits for 2 seconds, then resolves with "Water is boiled!".

// 2. async function cookRice() { ... }
// We use async because we want to use await inside it.

// This makes the function asynchronous, so it can pause and wait.

// 3. console.log("Start cooking...");
// Just prints a message.

// 4. const boiled = await boilWater();
// await pauses here.

// It waits until boilWater() is done (2 seconds).

// Then, it stores the result in boiled.

// 5. console.log(boiled);
// This shows "Water is boiled!" after waiting.

// 6. console.log("Add rice now.");
// Continues after boiling is done.

// 7. cookRice();
// This calls the whole function.

// 📝 Summary in Real-Life Terms:
// async function = "Hey, I might need to wait for something."

// await something() = "I'll wait here until that thing is done."