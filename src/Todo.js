const Todo = ({ todo, deleteTodo, completeTodo, handleCurrentTodo }) => {
  console.log("todo", todo);
  return (
    <div className="todo">
      <h3 className={todo.completed ? "complete" : "incomplete"}>
        {todo.name}
      </h3>
      <button onClick={() => handleCurrentTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => completeTodo(todo.id)}>Mark Completed</button>
    </div>
  );
};

export default Todo;
