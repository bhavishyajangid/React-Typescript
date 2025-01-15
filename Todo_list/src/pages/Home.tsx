import React, { useEffect, useRef, useState } from "react";
import { FormEvent } from "react";
import Todo from "../components/Todo";
import { getTodos, saveTodos } from "../utils/features";

const Home = () => {
  const [inputValue, setInputValue] = useState<TodoItems["tittle"]>("");

  const [todos, setTodos] = useState<TodoItems[]>(getTodos());

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: TodoItems = {
      tittle: inputValue,
      id: Math.floor(Math.random() * 10),
      isComplete: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id: TodoItems["id"]): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setIsChecked = (id: TodoItems["id"]): void => {
    const newTodo = todos.map((todo) => {
      if (todo.id == id) todo.isComplete = !todo.isComplete;

      return todo;
    });

    setTodos(newTodo);
  };

  const editTodo = (id: TodoItems["id"], text: TodoItems["tittle"]): void => {
    const newTodo = todos.map((todo) => {
      if (todo.id == id) todo.tittle = text;
      return todo;
    });

    setTodos(newTodo);
  };

  useEffect(() => {
       saveTodos(todos)
  }, [todos])

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        To-Do App
      </h1>

      {/* <!-- Todo Input Form --> */}
      <form
        onSubmit={(e) => {
          addTodo(e);
        }}
        className="flex mb-6"
      >
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Enter a new task"
          className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          disabled={inputValue == ""}
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </form>

      {/* <!-- Todo List --> */}
      <ul className="space-y-4">
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            setIsChecked={setIsChecked}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
