Name of project: DevStack

Description:
Build Your Ideal Developer Stack.
DevStack is a modern and interactive web application that allows developers to explore different technologies and create their own personalized development stack. Users can browse available technologies, view their details, and add or remove technologies from their stack.

🛠️ Technologies Used
1. React.js — Building the user interface
2. TypeScript — Type-safe development
3. Tailwind CSS — Styling and responsive design
4. DaisyUI — UI components
5. React Toastify — Notifications and alerts
6. JSON — Storing technology data
7. Vite — Development and build tool

✨ Features
1. Explore Technologies: Browse different development technologies with useful information such as category, description, rating, difficulty level, and technology icon.
2. Build Your Own Stack: Add favorite technologies to "Your Stack" and remove individual technologies whenever want.
3. Interactive Notifications: Get instant feedback using toast notifications when adding, removing, or clearing technologies from your stack.


## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes it easier to create and understand the UI of React components.

### 2. What is the difference between props and state?
**Props** are data passed from a parent component to a child component. They are read-only.
**State** is data managed inside a component. It can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows a component to store and update data. When the state changes, React re-renders the component.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook is used to perform side effects in a component, such as fetching data, updating the document title, or setting up event listeners.
It can be used to load JSON data because fetching data is a side effect that happens after the component renders.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify each item in a list. It allows React to efficiently track which items have been added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different UI based on a condition.
For example, we can show an empty message when there are no items:

{items.length === 0 ? (
    <p>Your list is empty.</p>
) : (
    <p>You have some items.</p>
)}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child through **props**.
To send something back, the parent can pass a **function as a prop**. The child can then call that function when an event happens.

// Parent
<Child onAdd={handleAdd} />

// Child
<button onClick={onAdd}>Add</button>
