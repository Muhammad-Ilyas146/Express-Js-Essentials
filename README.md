# Express-Js-Essentials

## Table of Contents

1. Introduction
2. What is Express?
3. Opinionated vs Unopinionated
4. Prerequisites
5. Express Setup
6. Basic Server
7. Using the --watch Flag & NPM Scripts
8. res.sendFile() Method
9. Static Web Server
10. Working with JSON
11. Postman Utility
12. Environment Variables (.env)
13. Request Params (req.params)
14. Query Strings (req.query)
15. Setting Status Codes
16. Multiple Responses
17. Route Files
18. Using ES Modules
19. Request Body Data
20. POST Request
21. PUT Request
22. DELETE Request
23. Middleware
24. Custom Error Handler
25. Catch All Error Middleware
26. Colors Package
27. Using Controllers
28. __dirname Workaround
29. Making Requests From Frontend
30. Submit Form to API
31. EJS Template Engine Setup
32. Pass Data to Views
33. Pass and Loop Over Arrays
34. Template Partials

## 1.Introduction

This project provides a detailed walkthrough of building a web server using Express.js. It is designed for developers who have a basic understanding of Node.js and want to learn how to create web applications using Express.js.

## 2.What is Express?

Express is a fast, unopinionated, and minimalist web framework for Node.js. It provides a robust set of features for web and mobile applications, allowing developers to build single-page, multi-page, and hybrid web applications with ease.

## 3.Opinionated vs Unopinionated

Express is considered an unopinionated framework, meaning it does not impose any particular structure or way of doing things. This flexibility allows developers to structure their applications as they see fit.

## 4.Prerequisites

Before starting with this project, ensure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)

## 5.Express Setup

To set up an Express project, follow these steps:
1. Initialize a new Node.js project:
   ```bash
   npm init -y
2.Install Express:
```bash
npm install express
```

## 6. Basic Server
Creating a basic server using Express:
```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```
## 7.Using the --watch Flag & NPM Scripts
Use the --watch flag with nodemon to automatically restart the server on file changes. Add the following script to your package.json:

```js
"scripts": {
  "start": "nodemon --watch . server.js"
}
```

## 8. res.sendFile() Method
Serve static files using the res.sendFile() method:

```js
app.get('/file', (req, res) => {
  res.sendFile(__dirname + '/path/to/file.html');
});
```

## 9. Static Web Server
Serve static files from a directory using the express.static middleware:

```js

app.use(express.static('public'));

```
## 10.Working with JSON
Parse JSON request bodies using the express.json() middleware:

```js

app.use(express.json());
```
## 11.Postman Utility
Use Postman to test your API endpoints by sending various types of HTTP requests and inspecting the responses.

## 12.Environment Variables (.env)
Store configuration variables in a .env file and load them using the dotenv package:

```js
require('dotenv').config();
const port = process.env.PORT || 3000;
```
## 13.Request Params (req.params)
Access route parameters using req.params:

```js 

app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

## 14.Query Strings (req.query)
Access query string parameters using req.query:
```js
app.get('/search', (req, res) => {
  res.send(`Search Query: ${req.query.q}`);
});

```
Setting Status Codes
Set HTTP status codes for responses:

## 15. JavaScript
```js
app.get('/not-found', (req, res) => {
  res.status(404).send('Not Found');
});
```

## 16.Multiple Responses
Handle multiple responses in a single route:

```js
app.get('/multiple', (req, res) => {
  if (req.query.type === 'json') {
    res.json({ message: 'Hello, JSON!' });
  } else {
    res.send('Hello, World!');
  }
});

```

## 17.Route Files
Organize routes into separate files for better maintainability:

```js
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

```

## 18.Using ES Modules
Use ES modules in your project by adding "type": "module" to your package.json:

```JSON

{
  "type": "module"
}
```

## 19.Request Body Data
Access request body data using req.body:

```js
app.post('/data', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

```
## 20.POST Request
Handle POST requests:

```js
app.post('/submit', (req, res) => {
  res.send('POST request received');
});

```

## 21.PUT Request
Handle PUT requests:

```js

app.put('/update', (req, res) => {
  res.send('PUT request received');
});
```
## 22.DELETE Request
Handle DELETE requests:

```js

app.delete('/delete', (req, res) => {
  res.send('DELETE request received');
});
```
## 23.Middleware
Use middleware functions to handle requests:
```js

app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});

```
## 24.Custom Error Handler
Create a custom error handler middleware:

```js

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```
## 25.Catch All Error Middleware
Handle all errors using a catch-all middleware:
```js
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

```

## 26.Colors Package
Use the colors package to add colors to your console logs:

```js

const colors = require('colors');
console.log('Hello, World!'.green);
```
## 27.Using Controllers
Organize your route handlers into controllers:

```js

const userController = require('./controllers/userController');
app.get('/user', userController.getUser);
```
## 28.__dirname Workaround
Use a workaround for __dirname in ES modules:

```js

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

```
## 29.Making Requests From Frontend
Make HTTP requests from the frontend using fetch or axios:

```js

fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));

```
## 30.Submit Form to API
Submit form data to an API endpoint:

```html

<form action="/submit" method="POST">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>
```
## 31.EJS Template Engine Setup
Set up EJS as the template engine:
```js
app.set('view engine', 'ejs');
```
##32.Pass Data to Views
Pass data to EJS views:

```js

app.get('/view', (req, res) => {
  res.render('index', { title: 'My Page' });
});

```

## 32.Pass and Loop Over Arrays
Pass arrays to EJS views and loop over them:

```js

app.get('/users', (req, res) => {
  const users = ['Alice', 'Bob', 'Charlie'];
  res.render('users', { users });
});

```

## 33.Template Partials
Use EJS partials to reuse templates:

```html

<%- include('header') %>
```
