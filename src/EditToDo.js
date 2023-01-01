import { useRef, useEffect } from "react";

const EditToDo = ({ setTodos, todos, currentTodo, setEditTodo }) => {
  useEffect(() => {
    todoRef.current.value = currentTodo.name;
  }, [currentTodo.name]);
  const todoRef = useRef();

  const handleEditToDo = (e) => {
    e.preventDefault();
    const updatedTodo = { ...currentTodo, name: todoRef.current.value };
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === currentTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    setEditTodo(false);
    todoRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleEditToDo}>
        <input type="text" ref={todoRef} />
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditToDo;
