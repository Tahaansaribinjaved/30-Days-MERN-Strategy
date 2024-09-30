# 

# 📝 ** Node.js Essentials - Day 3**

---

## 1. **Understanding Node.js Runtime**

**What is Node.js?**

- Node.js is a **runtime environment** built on the Chrome V8 engine that allows JavaScript to be executed server-side.
- **Key characteristics**:
    - Single-threaded with an event-driven, non-blocking architecture.
    - Allows building scalable and efficient network applications.

**Advantages of Node.js:**

- Highly scalable due to its event-driven, non-blocking I/O model.
- Suitable for I/O-heavy applications (e.g., web servers, real-time applications).

**Use cases:**

- Web servers (Express.js).
- Real-time applications (e.g., chat apps).
- API handling.

---

## 2. **Event Loop and Non-Blocking I/O**

**What is the Event Loop?**

- The event loop is a fundamental concept in Node.js that handles **asynchronous operations**.
- **Non-blocking I/O** means Node.js can continue executing code while waiting for I/O operations (like file reading or network requests) to complete.

**How it works**:

1. **Timers Phase**: Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2. **Pending Callbacks Phase**: Executes I/O callbacks.
3. **Idle and Prepare Phase**: Internal operations.
4. **Poll Phase**: Retrieves new I/O events, executing their callbacks.
5. **Check Phase**: Executes `setImmediate()` callbacks.
6. **Close Callbacks Phase**: Executes `close` event callbacks.

### 🛠 Example:

```jsx
setTimeout(() => console.log('Timer expired'), 0);
console.log('Event loop in action!');
// Output:
// Event loop in action!
// Timer expired

```

Here, `console.log` runs first since the event loop handles `setTimeout()` asynchronously.

---

## 3. **Exploring Node.js Core Modules**

**Core Modules in Node.js**:

- **fs (File System)**: Handles file I/O operations (read/write).
- **http**: Used for creating HTTP servers.
- **path**: Provides utilities for working with file and directory paths.
- **os**: Provides operating system-related utility methods.

### Examples:

### 1. **Using `fs` for File Handling**

```jsx
const fs = require('fs');

// Asynchronous file read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

```

### 2. **Creating a Simple HTTP Server using `http`**

```jsx
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});

server.listen(3000, () => console.log('Server running on port 3000'));

```

---

## 4. **File Handling in Node.js**

**Types of File Operations**:

1. **Synchronous**: Blocks the event loop while the file is being read or written.
    - Example: `fs.readFileSync()`
2. **Asynchronous**: Non-blocking; allows other tasks to continue while file operations occur in the background.
    - Example: `fs.readFile()`

**Common File Operations**:

1. **Reading files**: Using `fs.readFile()`.
2. **Writing files**: Using `fs.writeFile()`.
3. **Appending files**: Using `fs.appendFile()`.

### File Handling Example:

```jsx
const fs = require('fs');

// Asynchronous write to a file
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File successfully written!');
});

```

---

## 5. **Asynchronous Code in Node.js**

**Promises and async/await**:

- Promises and `async/await` provide cleaner syntax to handle asynchronous operations in Node.js.

### Using Promises:

```jsx
const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
   .then(data => console.log(data))
   .catch(err => console.error(err));

```

### Using async/await:

```jsx
const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileAsync();

```

---

## 6. **Project: Node.js Practice Repository**

**Project Objective**:

- Push examples demonstrating file handling and asynchronous code using Node.js core modules.

### Key Concepts to Include:

1. **File Reading**:
    - Example of reading files asynchronously.
2. **File Writing**:
    - Writing content to a file using the `fs` module.
3. **Handling Errors**:
    - Error handling using callbacks, `Promise.catch()`, or `try/catch` in `async/await`.
4. **Asynchronous Operations**:
    - Demonstrate the event loop in action with `setTimeout()` and `setImmediate()`.