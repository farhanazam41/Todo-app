import "./styles.css";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddToDo from "./AddToTodo";
import EditToDo from "./EditToDo";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    console.log("savedTodos", savedTodos);
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [editTodo, setEditTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCurrentTodo = (todo) => {
    setEditTodo(true);
    setCurrentTodo({ ...todo });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {!editTodo && <AddToDo setTodos={setTodos} todos={todos} />}
      {editTodo && (
        <EditToDo
          setTodos={setTodos}
          todos={todos}
          currentTodo={currentTodo}
          setEditTodo={setEditTodo}
        />
      )}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        handleCurrentTodo={handleCurrentTodo}
      />
    </div>
  );
}
