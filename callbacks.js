// Absolutely! Let's break down callbacks in JavaScript in the simplest way possible with examples and step-by-step explanation. 💡

// ✅ What is a Callback?
// A callback is a function passed as an argument to another function.
// This lets one function call another after it's done doing something.

// 🧠 Think of it like this:
// You're ordering a pizza.
// You tell the shop: "Once the pizza is ready, call me."
// Your phone number is the callback – they’ll use it later when they finish baking.

// 📦 Simple Example First:

function sayHello() {
    console.log("Hello!");
  }
  
  function greet(callback) {
    console.log("I am greeting...");
    callback(); // calling the callback function
  }
  
  greet(sayHello);

  
// Breakdown:

// This is a simple function named sayHello.

// It just prints “Hello!” when called.

// greet is another function.

// It takes another function as its argument, which we named callback.

// Inside, it prints a message, then calls the function you passed in.

// You are calling greet, and passing sayHello as an argument.

// So callback() inside greet() becomes sayHello()!

// 🕐 Why Use Callbacks?
// Because JavaScript is asynchronous — some actions (like loading data or waiting) take time.

// You don’t want to stop everything else while you wait. Instead, you use a callback to say:

// “When that thing is done, run this code.”

// Example with Delay (setTimeout)


function after2Seconds() {
    console.log("2 seconds passed!");
  }
  
  setTimeout(after2Seconds, 2000);

//   Breakdown:
//   setTimeout waits 2000 milliseconds (2 seconds).
  
//   After that, it calls the after2Seconds() function.
  
//   You're not calling it immediately — you’re saying:
  
//   “Call after2Seconds after 2 seconds.”  


// Awesome! Let’s build a real-life callback example step-by-step using something you're familiar with — a button click. We’ll simulate this using HTML + JavaScript and explain everything.

// 💡 Scenario:
// You have a button. When you click it, it should say:

// "Button was clicked! Hello, user!"

// ✅ Step 1: Create a Button in HTML
<button id="myButton">Click Me</button>
// This creates a button with an ID so we can find it using JavaScript.

// ✅ Step 2: JavaScript with Callback Function


//   // 👇 This is our callback function
function greetUser() {
    console.log("Button was clicked! Hello, user!");
   }

//   // 👇 Getting the button from the page
const button = document.getElementById("myButton");

//   // 👇 Add an event listener to the button
button.addEventListener("click", greetUser);

// 🔍 Let’s Break This Down:
// 🧱 function greetUser() { ... }
// This is a normal function.

// It just prints a greeting in the console.

// 🔎 const button = document.getElementById("myButton");
// This finds the button on the page so we can "listen" to it.

// 🎧 button.addEventListener("click", greetUser);
// Here comes the callback!

// You're telling the browser:

// “When the button is clicked, call the function greetUser.”

// So greetUser is a callback passed to addEventListener.

// ✅ Example with Anonymous Callback
// You can also write the function directly inside:


button.addEventListener("click", function () {
  console.log("Hello from an anonymous callback!");
});
// This is still a callback, just not a named one like greetUser.

// 🧠 Summary of What You Did:
// You made a button.

// You used addEventListener to react to a click.

// You passed a function to addEventListener.

// That function (called after the click) is your callback.