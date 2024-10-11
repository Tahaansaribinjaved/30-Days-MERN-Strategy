
---

# **Day 9: Middleware and Error Handling in Express**

## **Overview**
Day 9 of your journey covers crucial aspects of building robust Express.js applications. Today, you'll focus on **custom middleware** and **error handling**. These topics are key to managing the flow of requests and ensuring your API handles errors gracefully.

By the end of the day, you'll have implemented middleware to enhance the **Simple-Blog-App** and ensure better logging, security, and error handling.

---

## **Topics Covered**
1. **Custom Middleware**
   - What is Middleware?
   - Creating custom middleware functions.
   - Logging requests and responses.
   - Understanding the `next()` function in middleware.

2. **Error Handling Techniques**
   - Handling errors with `next()`.
   - Creating a global error handler.
   - Handling 404 and other common HTTP errors.
   - Structuring error responses with proper status codes and messages.

---

## **Tasks**
1. **Create Logging Middleware**
   - Implement middleware that logs the incoming requests (method, path, and timestamp).
   - Store logs in a file for later analysis (optional).
   
2. **Create Error Handling Middleware**
   - Implement centralized error handling middleware.
   - Handle different types of errors (e.g., database errors, 404s, validation errors).
   - Customize error responses in JSON format for API clients.

---

## **Project Update: Simple-Blog-App**
Today, you'll be enhancing the **Simple-Blog-App** with the following features:

### **1. Logging Middleware**
You will create a middleware that logs every incoming request to your API. For example, whenever someone accesses a blog post or creates a new one, you'll log the HTTP method, URL path, and timestamp.

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

app.use(logger);
```

### **2. Error Handling Middleware**
Add centralized error handling to the Simple-Blog-App. This middleware will catch any unhandled errors and provide a structured error response.

```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
};

app.use(errorHandler);
```

---

## **Step-by-Step Guide**

### **Step 1: Setting Up Middleware**
- Create a new directory named `middleware` to store your custom middleware files.
- Inside, create two files: `logger.js` and `errorHandler.js`.

### **Step 2: Logger Middleware**
- In `logger.js`, create a logging middleware that logs requests:

```javascript
// middleware/logger.js
module.exports = (req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};
```
- Import and use this middleware in your `app.js` or `server.js`.

```javascript
const logger = require('./middleware/logger');
app.use(logger);
```

### **Step 3: Error Handling Middleware**
- In `errorHandler.js`, create centralized error handling middleware:

```javascript
// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
};
```
- Apply the error handler at the end of your middleware chain:

```javascript
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);
```

### **Step 4: Handle 404 Errors**
- Add a catch-all route for unhandled requests (404 errors):

```javascript
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
});
```

### **Step 5: Test and Validate**
- Test the API by making valid and invalid requests.
- Check the logs for correct logging of requests.
- Ensure the error handler responds with meaningful messages when things go wrong.

---

## **Demo**

After completing these steps, your **Simple-Blog-App** will:
1. Log all incoming requests with details (method, URL, timestamp).
2. Respond with custom error messages in a JSON format for any unhandled errors.
3. Handle 404 errors gracefully, providing meaningful feedback.

---

## **Screenshots**

Include a few sample screenshots of the app's response when errors occur and logs of incoming requests.

---

## **Technologies Used**
- **Node.js**
- **Express.js**
- **JavaScript**

---

## **How to Run Locally**

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/simple-blog-app.git
    cd simple-blog-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

---

## **Conclusion**
On **Day 9**, you added key functionality to your Simple-Blog-App, ensuring that your app not only functions properly but also logs requests and handles errors gracefully. These enhancements will make your app more maintainable, secure, and user-friendly.

---
