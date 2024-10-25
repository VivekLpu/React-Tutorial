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

// import AirbnbWebsite from "./Components/airbnb";
// import Airbnb from "./Components/airbnb";

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

/** 
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
*/

/*
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    // Check if input is empty
    if (newTask.trim() === "") return;

    // Create a new task
    const newTaskAdd = {
      id: Date.now(), // Use Date.now() as a unique identifier
      name: newTask,
    };

    // Update the state
    setTasks([...tasks, newTaskAdd]);
    setNewTask("");
  }

  function handleDelete(id) {
    // Remove the task with the specified ID
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}{" "}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

/*
import React from "react";
import CatFactsComponent from './Components/catComponent';
import UserList from "./Components/UserList";

const App= () => {
  return(
    <div>
      <catComponent/>
      <CatFactsComponent/>
    </div>
  )
}
export default App; */

/*
import React from "react";
import UserList from "./Components/UserList";
const App= () => {
  return(
    <div>
      <UserList/>
      
    </div>
  )
}
export default App;
*/

/*
import React from "react";
import ParentComponent from "./Components/Parents"
const App= () => {
  return(
    <div className="app">
      <h1>Parent Components</h1>
      <ParentComponent/>
    </div>
  );
}
export default App;
*/

// App.js

// App.js

/** 
import React from "react";
import AuthProvider from "./Components/AuthContext";
import LoginButton from "./Components/LoginButton"; 

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <h1>Authentication Example</h1>
        <LoginButton />
      </div>
    </AuthProvider>
  );
};
export default App;
*/


/**
import UHooks from "./Components/userefHook";

const App = () => {
  return (
      <div>
        <UHooks/>
      </div>
  );
};
export default App;
*/

/** 
import TodoApp from "./Components/ToDoList";

const App = () => {
  return (
      <div>
        <TodoApp/>
      </div>
  );
};

export default App;
*/

/**
//UseCallBack
import React,{useState, useCallback} from "react";
const useCallbackTesting=()=>{
    const [count, setCount] = useState(0);
    const [callbackCount, setCallbackCount] = useState(0);
    const [testState, setTestState] = useState(false);
    //without usecallback
    const incrementWithoutCallback=()=>{
        setCount(count+1);
    }
    //with useCallback
    const incrementWithCallback=useCallback(()=>{
        setCallbackCount(callbackCount+1);
    },[callbackCount])
    console.log('fun rendered')


    return(
        <div>
            
            <h1>Without useCallback : {count} </h1>
            <button onClick={incrementWithoutCallback}>Increment without useCallback</button>
            <h1>With useCallback : {callbackCount}</h1>
            <button onClick={incrementWithCallback}>Increment with useCallback</button>
            <button onClick={()=>setTestState(!testState)}>Test State</button>
        </div>
    )
}
export default useCallbackTesting;
*/


/**
import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = useCallback(() => {
    console.log('Increment Done');
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>useCallback</h2>
      <p>Count: {count}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter the Text here..."
      />
      <ChildCompo onIncrement={handleIncrement} />
    </div>
  );
}

function ChildCompo({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default App;

*/


/**
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", position: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.position) {
      newErrors.position = "Position is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      // Handle form submission (e.g., send data to server)
      console.log("Form submitted", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Position Applied For</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">Select a Position</option>
            <option value="developer1">Developer1</option>
            <option value="developer2">Developer2</option>
            <option value="developer3">Developer3</option>
          </select>
          {errors.position && <p style={{ color: "red" }}>{errors.position}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
    </div>
  );
}

export default App;

*/


/**
//SignUp and Login Form
import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="container">
      <div className="toggle-buttons">  
        <button className={isLoginForm ? "active" : ""} onClick={() => setIsLoginForm(true)}>
          Login
        </button>
        <button className={!isLoginForm ? "active" : ""} onClick={() => setIsLoginForm(false)}>
          Signup
        </button>
      </div>
      {isLoginForm ? <LoginForm toggleForm={toggleForm} /> : <SignupForm toggleForm={toggleForm} />}
    </div>
  );
}

function LoginForm({ toggleForm }) {
  return (
    <div className="form-container">
      <div className="form-field">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div className="form-field">
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div className="form-field">
        <a href="#">Forgot Password?</a>
      </div>
      <button className="form-button">Login</button>
      <div className="form-footer">
        <p>Not a member? <a href="#" onClick={toggleForm}>Signup now</a></p>
      </div>
    </div>
  );
}

function SignupForm({ toggleForm }) {
  return (
    <div className="form-container">
      <div className="form-field">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div className="form-field">
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div className="form-field">
        <label>Confirm Password:</label>
        <input type="password" placeholder="Confirm your password" />
      </div>
      <button className="form-button">Signup</button>
      <div className="form-footer">
        <p>Already a member? <a href="#" onClick={toggleForm}>Login</a></p>
      </div>
    </div>
  );
}

export default App;
*/

/**
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from API
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error)
      });
  }, []);

  return (
    <div>
      <h1>Data Fetched</h1>
      {error && <p style={{ color: 'red' }}>Error fetching data: {error.message}</p>}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.id}</h2>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({ title: "", body: "" });

  useEffect(() => {
    // Fetch the data from API
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({ title: post.title, body: post.body });
  };

  const handleUpdate = (id) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, formData)
      .then((response) => {
        const updatedData = data.map((post) =>
          post.id === id ? response.data : post
        );
        setData(updatedData);
        setEditingPost(null);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        const updatedData = data.filter((post) => post.id !== id);
        setData(updatedData);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Data Fetched</h1>
      {error && <p style={{ color: 'red' }}>Error fetching data: {error.message}</p>}
      {editingPost && (
        <div>
          <h2>Edit Post</h2>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <textarea
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            placeholder="Body"
          ></textarea>
          <button onClick={() => handleUpdate(editingPost.id)}>Update</button>
          <button onClick={() => setEditingPost(null)}>Cancel</button>
        </div>
      )}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
*/

/*
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';  

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/feedback',
    element: <Feedback />
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
*/

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchUserDetails = async () => {
    try {
      setError("");
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUser(response.data);
    } catch (err) {
      setUser(null);
      setError("User not found or invalid user ID.");
    }
  };

  return (
    <div>
      <h2>Fetch User Details</h2>
      <div>
        <input
          type="text"
          placeholder="Enter user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={fetchUserDetails}>Get User</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <h3>User Details:</h3>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default App;
