

```markdown
# 🚀 Day 6: React Hooks and State

Welcome to **Day 6** of your React journey! In this session, we will explore the powerful concept of **React Hooks**, which allow us to use state and lifecycle methods in functional components. This shift from class components to functional components enhances the way we manage state and side effects in our applications.

---

## 📝 **Topics Covered**

### 1. **useState Hook**
The `useState` hook is the primary way to add state to your functional components. 

- **Definition:** The `useState` function takes the initial state as an argument and returns an array with the current state and a function to update that state.

  **Syntax:**
  ```javascript
  const [state, setState] = useState(initialState);
  ```

- **Example:**
  ```javascript
  import React, { useState } from 'react';

  function Counter() {
      const [count, setCount] = useState(0);

      return (
          <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
      );
  }
  ```

- **Key Points:**
  - Each call to `useState` returns a pair: the current state value and a function that lets you update it.
  - State updates are asynchronous and can be batched for performance.

---

### 2. **useEffect Hook**
The `useEffect` hook allows you to perform side effects in your components, such as data fetching, subscriptions, or manual DOM manipulations.

- **Definition:** The `useEffect` hook takes a function as an argument, which is executed after every render by default. You can control when it runs using a dependency array.

  **Syntax:**
  ```javascript
  useEffect(() => {
      // Your code here (side effect)
      return () => {
          // Cleanup if needed
      };
  }, [dependencies]);
  ```

- **Example:**
  ```javascript
  import React, { useState, useEffect } from 'react';

  function TitleUpdater() {
      const [count, setCount] = useState(0);

      useEffect(() => {
          document.title = `You clicked ${count} times`;
          // Cleanup function if needed
          return () => {
              document.title = 'React App';
          };
      }, [count]);

      return (
          <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
      );
  }
  ```

- **Key Points:**
  - The effect runs after the render and can be controlled with the dependency array.
  - If you return a function from the effect, it will be called when the component unmounts or before the effect runs again, allowing you to clean up side effects.

---

## 🎯 **Tasks for Today**

1. **Enhance Your React App:**
   - Create a simple counter application using `useState` to manage the count.
   - Implement a title updater using `useEffect` to change the document title based on the count.

2. **Explore More:**
   - Try adding additional state variables and side effects to see how they can interact with each other.

3. **Push Your Code:**
   - Ensure that your code demonstrates effective usage of both hooks.

---

## 🛠️ **Project Structure**

### **React Hooks Repo**
For today's project, you will push the code that demonstrates the usage of React hooks. Below is an example project structure you can follow:

```
my-react-hooks-app/
├── public/
│   ├── index.html        # Main HTML file
│   └── favicon.ico       # App favicon
├── src/
│   ├── App.js            # Main app file using useState and useEffect
│   ├── components/       # Folder for reusable components
│   │   ├── Counter.js    # Counter component with useState
│   │   └── TitleUpdater.js # TitleUpdater component with useEffect
│   ├── index.js          # Entry point of the React app
│   └── styles.css        # Styles for your app
└── README.md             # Documentation of your React Hooks project
```

### **Important Files**

- **`Counter.js`**
  ```javascript
  import React, { useState } from 'react';

  const Counter = () => {
      const [count, setCount] = useState(0);
      return (
          <div>
              <h1>Counter: {count}</h1>
              <button onClick={() => setCount(count + 1)}>Increment</button>
              <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
      );
  };

  export default Counter;
  ```

- **`TitleUpdater.js`**
  ```javascript
  import React, { useEffect } from 'react';

  const TitleUpdater = ({ count }) => {
      useEffect(() => {
          document.title = `Count is ${count}`;
      }, [count]);

      return null; // No UI component, just effect
  };

  export default TitleUpdater;
  ```

---

## 🌟 **Learning Outcomes**
By the end of this session, you will:
- Understand the fundamental concepts of `useState` and `useEffect`.
- Be able to create interactive, stateful components using hooks.
- Learn to manage side effects effectively in functional components.

---

## 📂 **Repository**

Don’t forget to push your code to your GitHub repository! Share your progress with others and seek feedback.

📌 **Repo Link:** [Your Repository URL](#)

---

## 🎓 **Next Steps**
- Explore more advanced hooks like `useContext` and `useReducer` in the upcoming sessions.
- Experiment with creating custom hooks to encapsulate logic that can be reused across components.

---

Happy Coding! Keep pushing your boundaries! 😄✨

