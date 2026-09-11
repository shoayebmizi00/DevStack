DevStack

This is a web technology related web application where users can add their technology in a stack and they can also remove the stack singly or full stack. Basically this application is build for practice purpose, where i am using:

React.js
Tailwind CSS
DaisyUI
TypeScript
React-Toastify
JSON (for technology data)
Vite (build tool)

In these project i add so many features like add technology to a stack, show toast to the user based on his/her task, user can remove single or whole stack at a time.

Question Answering:

1. What is JSX, and why is it used in React?
   Ans: JSX means JavaScript XML. This is use in react for enhance developer coding experience also user experience, also increase scalability in application.

2. What is the difference between props and state?
   Ans: Props are values which is passed from parent component and receive into child component. State is a data which is own property of a component.

3. What does the useState hook do, and where did you use it in this project?
   Ans: useState hook store data and update data, i used useState in for select technology and fetch api data.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   Ans: Helps to run code after rendering component, don't know.

5. Why does every item in a .map() list need a unique key prop?
   Ans: To identify the element uniquely.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   Ans: Conditional rendering means based on condition render something on happened a task. Example: Add to stack button.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   Ans: Pass data from parent component to child component using props and a child send something using lifting state UP(means when we need to pass data from child to child we declare that data into parent and pass every child using props).
