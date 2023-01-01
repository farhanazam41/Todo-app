import { useRef } from "react";

const AddToDo = ({ setTodos, todos }) => {
  const todoRef = useRef();

  const handleAddToDo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      name: todoRef.current.value,
      completed: false
    };
    setTodos((prevTodo) => [...prevTodo, { ...newTodo }]);
    todoRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleAddToDo}>
        <input type="text" ref={todoRef} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddToDo;
