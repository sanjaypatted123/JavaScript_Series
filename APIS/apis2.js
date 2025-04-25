// 📌 1. What is an API?
// API (Application Programming Interface) is a set of rules that allows one software or service to interact with another.

// Think of it as a menu in a restaurant. The menu provides a list of dishes (functions) you can order (call).

// You don’t need to know how the kitchen (backend) works, just how to request the dish (endpoint).

// 📌 2. Types of APIs

// Type	Description
// REST	Uses HTTP methods. Most widely used.
// SOAP	Older, XML-based protocol
// GraphQL	Query-based; client specifies required data
// WebSockets	Real-time, full-duplex communication
// SDK/API Libraries	Packaged methods to access API services
// 🔑 Focus for now: REST API

// 📌 3. HTTP Basics (for REST APIs)
// Methods:

// GET → Retrieve data

// POST → Create data

// PUT → Update entire data

// PATCH → Update partial data

// DELETE → Remove data

// Status Codes:

// 200 – OK

// 201 – Created

// 400 – Bad Request

// 401 – Unauthorized

// 403 – Forbidden

// 404 – Not Found

// 500 – Server Error

// Headers:

// Content-Type: application/json

// Authorization: Bearer TOKEN

// Accept: application/json

// 📌 4. Fetch API (Native JavaScript)
// ✅ Basic GET Request
// javascript
// Copy
// Edit
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
// ✅ With async/await
// javascript
// Copy
// Edit
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
// 📌 5. POST, PUT, DELETE with Fetch
// POST (Create)
// javascript
// Copy
// Edit
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 25 })
})
// PUT/PATCH (Update)
// javascript
// Copy
// Edit
fetch('https://api.example.com/users/1', {
  method: 'PUT', // or PATCH
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Johnny' })
})
// DELETE
// javascript
// Copy
// Edit
fetch('https://api.example.com/users/1', {
  method: 'DELETE'
})
// 📌 6. Axios (Alternative to Fetch)
// javascript
// Copy
// Edit
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
// ✅ Axios Advantages:

// Auto JSON conversion

// Better error handling

// Supports older browsers

// Interceptors for headers/token

// 📌 7. Working with Public APIs
// Try these first:

// JSONPlaceholder

// REST Countries

// OpenWeatherMap

// PokéAPI

// ✅ Practice:

// Build UI to fetch and display data

// Add search, filter, pagination

// Use loading spinners and error messages

// 📌 8. Headers & Authentication
// API Key in URL
// js
// Copy
// Edit
fetch('https://api.example.com/data?apikey=your_key')
// Bearer Token in Headers
// js
// Copy
// Edit
fetch('https://api.example.com/protected', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
})
// 📌 9. Advanced Concepts
// CORS (Cross-Origin Resource Sharing): Browser security feature that restricts API calls from another domain.

// Rate Limiting: APIs often limit number of requests per time window.

// Pagination: Use query parameters like ?page=1&limit=10.

// Debouncing: Prevents excessive API calls during typing (search).

// Throttling: Limits how often a function can run in a time period.

// 📌 10. Mini Projects Ideas

// Project	API Used
// Weather App	OpenWeatherMap API
// Country Info	REST Countries API
// Movie App	TMDb API
// GitHub User Search	GitHub API
// News App	NewsAPI or GNews
// 📌 11. Bonus: Build Your Own API (Future Step)
// When you’re ready:

// Use Node.js + Express.js

// Define endpoints: /users, /posts

// Handle GET, POST, PUT, DELETE

// Use MongoDB or SQLite for storing data

// 📌 Tools to Know
// Postman – For testing APIs

// Insomnia – Lightweight alternative to Postman

// DevTools Network Tab – See API requests made by browser

// ✅ Checklist to Track Your API Mastery

// Task	Done
// Understand REST and HTTP Methods	☐
// Use fetch() and handle response/errors	☐
// Create requests with headers/body	☐
// Work with public APIs	☐
// Handle Auth (API Key, Bearer Token)	☐
// Do CRUD operations	☐
// Use Axios for cleaner code	☐
// Build a mini API-based project	☐
// (Optional) Build your own API with Node.js	☐
