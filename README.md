# Dev Stack

A simple web application to explore technologies and build your own custom development stack.

## Live Links

- Live Site: https://devstack-wiz.vercel.app/
- GitHub Repository: https://github.com/Wizardezgg/MyA-05

## Technologies Used

- React (Vite)
- Tailwind CSS
- React-Toastify

## Key Features

1. Interactive Stack Builder
2. Remove & Clear All
3. Responsive Design

---

## React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that we use to write HTML-like code inside JavaScript. It makes writing and understanding React UI components much simpler.

2. What is the difference between props and state?

- Props:Data passed from a parent component to a child. Props are read-only.
- State:Data stored and managed inside a component. When state changes, the component re-renders.

3. What does the useState hook do, and where did you use it in this project?

useState allows functional components to store and update dynamic data.  
In this project, I used it in App.jsx for:

- technologies
- stack
- loading

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect lets us run side effects like fetching data when a component mounts.  
I used it with fetch(/technologies.json) and an empty dependency array [] so the data loads only once when the page opens.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key (like key={tech.id}) to track which items change, are added, or are removed. This helps React update the DOM fast and avoid rendering bugs.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI elements depending on a condition.  
In MyStack.jsx, if the stack is empty (count === 0), it shows "Your stack is empty." Otherwise, it shows the list of selected technologies and the "Remove All" button.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- Parent to Child: Passed directly using props (example: <TechGrid technologies={technologies} />).

- Child to Parent: The parent passes a function down as a prop, and the child calls that function when an event happens (example: clicking "Add to Stack" calls onAddToStack(tech) to send the item back up to App.jsx).
