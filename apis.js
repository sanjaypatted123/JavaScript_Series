// // 🧩 What is an API?
// // API stands for Application Programming Interface. It is a set of rules and protocols that allows two software applications to communicate with each other.

// // In JavaScript, APIs are commonly used to:

// // Get or send data to a server (e.g., via HTTP).

// // Access built-in browser features (e.g., fetch, DOM, localStorage).

// // Work with third-party services (e.g., Google Maps API, Weather APIs).

// // 🔹 Types of APIs in JavaScript

// // Type	Description
// // Browser APIs	Built into the browser (DOM, BOM, Geolocation, etc.)
// // Web APIs (HTTP)	Used to interact with web servers over HTTP/S (REST APIs, GraphQL, etc.)
// // Third-party APIs	External APIs provided by services like OpenWeather, Stripe, etc.
// // 📗 1. HTTP Basics for APIs
// // ✅ HTTP Methods (Verbs)

// // Method	Purpose
// // GET	Retrieve data
// // POST	Submit data
// // PUT	Update existing
// // PATCH	Partially update
// // DELETE	Delete data
// // ✅ HTTP Status Codes

// // Code	Meaning
// // 200	OK
// // 201	Created
// // 400	Bad Request
// // 401	Unauthorized
// // 403	Forbidden
// // 404	Not Found
// // 500	Internal Server Error


// 📘 2. Making API Requests in JavaScript
// ✅ XMLHttpRequest (Old Way)
// javascript
// Copy
// Edit
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
// ✅ fetch() API (Modern Way)
// javascript
// Copy
// Edit
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
// ✅ async/await with fetch()
// javascript
// Copy
// Edit
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
getData();
// 📘 3. Working with JSON
// ✅ Parse and Stringify
// javascript
// Copy
// Edit
const jsonData = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonData);

const backToJson = JSON.stringify(obj);
// 📘 4. Sending Data with fetch()
// ✅ POST Request Example
// javascript
// Copy
// Edit
const data = { name: 'John', age: 30 };

fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
// 📘 5. Common API Handling Patterns
// ✅ Error Handling
// javascript
// Copy
// Edit
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
// ✅ Loading State Example
// javascript
// Copy
// Edit
async function fetchData() {
  console.log('Loading...');
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log('Data loaded:', data);
  } catch (error) {
    console.error('Error loading:', error);
  }
}
// 📘 6. API Authentication Methods

// Method	Description
// API Key	Passed in header or URL for access
// Bearer Token	Secure token passed via Authorization header
// OAuth	Used for secure access, usually involves login + authorization server flow
// ✅ Bearer Token Example
// javascript
// Copy
// Edit
fetch('https://api.example.com/secure-data', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }
})
.then(res => res.json())
.then(data => console.log(data));
