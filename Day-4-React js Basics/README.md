

---

# Day 4: React.js Basics

## Overview

Welcome to **Day 4** of your React.js journey! Today, we'll be focusing on setting up a React application, understanding the fundamentals of components, JSX, and props, and applying that knowledge by building a simple React app with functional components.

By the end of this session, you'll have a working React application, and you'll be familiar with the essential building blocks of React that are crucial for building dynamic and modular user interfaces.

---

## Topics Covered

### 1. **Setting Up a React Application**
   - Learn how to create a React app using **Create React App (CRA)**.
   - Understand the basic folder structure of a React project.

### 2. **Components in React**
   - Learn the concept of **components** and how they help in dividing the UI into reusable parts.
   - Understand **functional components**, and how they differ from class-based components.

### 3. **JSX (JavaScript XML)**
   - Explore **JSX**, the syntax extension of JavaScript that allows you to write HTML within JavaScript code.
   - Learn how to use JSX effectively within React components.

### 4. **Props**
   - Understand the concept of **props** (short for properties) in React.
   - Learn how to pass data from one component to another using props.

---

## Project: Building a Simple React App

### Goal:
Build a simple React app to solidify your understanding of functional components, JSX, and props.

### Steps:
1. **Initialize the Project**
   - Create a new React app using the following command:
     ```bash
     npx create-react-app react-basics
     ```
   - Navigate into the project directory:
     ```bash
     cd react-basics
     ```

2. **Create Functional Components**
   - Create a component `App.js` as the main component.
   - Add a `Header` component that displays the title of your app.
   - Add a `UserInfo` component that takes **props** (like name and age) and displays user information dynamically.

3. **Utilize JSX**
   - Use JSX syntax to render HTML elements and embed JavaScript expressions within your components.
   - Example: 
     ```jsx
     <h1>Hello, {props.name}!</h1>
     ```

4. **Pass Props**
   - Pass props from the `App` component to the `UserInfo` component and display dynamic user data.

5. **Styling the App**
   - Optionally, add some basic styles using CSS or inline styles for a more polished look.

---

## Folder Structure

Here’s an overview of the key files in your React app:

```plaintext
react-basics/
├── public/
│   ├── index.html      # The main HTML file
├── src/
│   ├── App.js          # Main component
│   ├── index.js        # Entry point
│   ├── components/
│   │   ├── Header.js   # Header component
│   │   ├── UserInfo.js # Component to display user information
├── package.json        # Project configuration
```

---

## How to Run the App

To get the app up and running locally:

1. Clone this repository:

   ```bash
   git clone <repo-link>
   cd react-basics
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will automatically open in your browser at `http://localhost:3000`.

---

## Sample Code

Here’s a brief example of how the components might look:

```jsx
// App.js
import React from 'react';
import Header from './components/Header';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <Header title="React Basics" />
      <UserInfo name="John Doe" age={28} />
    </div>
  );
}

export default App;
```

```jsx
// Header.js
import React from 'react';

function Header(props) {
  return <h1>{props.title}</h1>;
}

export default Header;
```

```jsx
// UserInfo.js
import React from 'react';

function UserInfo(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default UserInfo;
```

---

## Deployment

Once you're satisfied with your app, you can push your code to your repository on GitHub:

1. Add your changes to git:
   ```bash
   git add .
   ```

2. Commit your changes:
   ```bash
   git commit -m "Initial commit - React Basics"
   ```

3. Push to GitHub:
   ```bash
   git push origin main
   ```

---

## Conclusion

Congratulations on completing Day 4 of React.js Basics! 🎉

You’ve now successfully set up a React application, learned about components, JSX, and props, and built a functional app. Keep experimenting and adding new features to reinforce your knowledge.

Stay consistent with your learning, and feel free to share your progress on social platforms like GitHub and LinkedIn.

Happy Coding! 🚀

---
