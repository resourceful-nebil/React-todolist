// Import the neccessary components
import React from "react";
import TodoForm from "./Components/InputField/TodoForm";
import Todo from "./Components/Todo/Todo";
import "./index.css";

function App() {
  return (
    // Create the instances of your components here.
    // <div className="card">
    //   <div className="todo">
    //     <h2>TODO LIST</h2>
    //     <div className="wrapper">
    //     <TodoForm />
    //     <Todo />
    //     </div>
    //   </div>
    // </div>
    <div className="card">
      <h2>TODO LIST</h2>
      <div className="wrapper">
        <TodoForm/>
        {/* <Todo />
        <Todo /> */}
      </div>
    </div>
  );
}

export default App;
