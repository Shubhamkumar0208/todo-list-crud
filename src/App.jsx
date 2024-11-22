import React, { useState } from "react";
import Form from "./assets/Form";
import Todos from "./assets/Todos";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is brand new Title",
      description: "This is brand new Description",
    },
    {
      id: 2,
      title: "This is brand new Title 2",
      description: "This is brand new Description 2",
    },
    {
      id: 3,
      title: "This is brand new Title 3",
      description: "This is brand new Description 3",
    },
  ]);

  const [id, setId] = useState("");

  const deleteTodo = (id) => {
    setTodos(todos.filter((d) => d.id != id));
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">React To Do List CRUD App</h1>
        <Form 
        id={id}
        setId={setId}
        todos={todos} 
        setTodos={setTodos} 
        />
        <Todos todos={todos}
         deleteTodo={deleteTodo} 
         setId={setId} 
         />
      </div>
    </>
  );
};

export default App;
