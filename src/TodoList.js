import Todo from "./Todo";

const TodoList = ({ todos, setTodos, handleCurrentTodo }) => {
  const deleteTodo = (id) => {
    const filteredTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
    const modifiedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(modifiedTodos);
  };

  return (
    <ul className="todo-container">
      {todos?.map((todo, index) => {
        return (
          <li key={index}>
            <Todo
              todo={todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              handleCurrentTodo={handleCurrentTodo}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
