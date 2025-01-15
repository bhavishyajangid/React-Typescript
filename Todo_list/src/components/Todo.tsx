import React from "react";
import { useState } from "react";
interface propsTodo {
  todo: TodoItems;
  deleteTodo: (id: TodoItems["id"]) => void;
  setIsChecked: (id: TodoItems["id"]) => void;
  editTodo: (id: TodoItems["id"], text: TodoItems["tittle"]) => void;
}

const Todo = ({ todo, deleteTodo, setIsChecked, editTodo }: propsTodo) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [editedValue, setEditedValue] = useState<TodoItems["tittle"]>(
    todo.tittle
  );

  return (
    <li className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
      <div className="flex items-center">
        <input
          onClick={() => {
            setIsChecked(todo.id);
          }}
          type="checkbox"
          checked={todo.isComplete}
          className="mr-3 rounded"
        />

        {editActive ? (
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editTodo(todo.id, editedValue);
                setEditActive(false);
              }
            }}
            onChange={(e) => {
              setEditedValue(e.target.value);
            }}
            value={editedValue}
            type="text"
            className={`min-w-20  border border-solid border-gray-500 `}
          />
        ) : (
          <span
            className={`text-gray-700 ${todo.isComplete ? "line-through" : ""}`}
          >
            {todo.tittle}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => {
            setEditActive((pre) => !pre);
          }}
          className="text-blue-500 hover:text-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
          className="text-red-500 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
