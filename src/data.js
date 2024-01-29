// Write a block of code using JS fetch API to get data from the server with these conditions:
// 1. Request method: GET
// 2. Request URL: http://localhost:3000/api/v1/contacts
// 3. Request header: Content-Type: application/json:
// 4. Convert the response to JSON format
// The code is:
fetch('http://localhost:3000/api/v1/contacts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
