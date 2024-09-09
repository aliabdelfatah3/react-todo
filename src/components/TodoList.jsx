import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-center h-screen brightness-100 items-center">
      <div className="flex flex-col w-fit rounded py-4 px-4 bg-gray-100 shadow-2xl gap-5">
        <div className="w-full flex justify-center">
          <h1 className=" text-center font-bold border-b-2 border-black w-fit">
            Todo List
          </h1>
        </div>
        <form className="flex gap-1 " onSubmit={addTodo}>
          <input
            className="w-72 shadow-lg p-1"
            placeholder="Enter Your List"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="bg-sky-600 shadow-lg rounded px-3 py-1 font-semibold"
            type="submit"
          >
            Add Todo
          </button>
        </form>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              className="flex items-center max-w-96 gap-2 bg-gray-200 rounded py-1 px-2  justify-between"
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
            >
              <p
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                className="break-all"
              >
                {todo.text}
              </p>
              <button
                className="bg-emerald-500 rounded-full py-1 px-4"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
