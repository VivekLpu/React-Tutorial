// function App(){
//   let count =0;
//   function handleAdd(){
//     count += 1;
//     console.log(count);
//   }
//   return(
//     <div>
//       <div>
//         <p>{count}</p>
//         <button onclick={handleAdd}>Add</button>
//       </div>
//     </div>
//   )
// }

// export default App;

/** 

import { useState } from "react";
function App(){
  const [count, setCount] =  useState(0);
  function handleAdd(){
    setCount(count+1);
  }

  function handleSub(){
    setCount(count-1);
  }

  function handleReset(){
    setCount(0);
  }
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App;

*/

/*
import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function handleRemoveTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>My To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

*/

//CSS Moduls in React
import './App.css';
import ModuleButton from './Components/ModuleButton';
const App= () => {
  return(
    <div>
      <button className="btn"> Button 1</button>
      <button className="btn"> Button 2</button>
      <ModuleButton/>
    </div>
  )
}

export default App;