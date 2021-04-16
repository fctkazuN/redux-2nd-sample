import React, { useState } from "react";

import { useSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { addTodo, delTodo, toggleTodo } from "../store/modules/redux_toolkit";

const Hooks = React.memo(() => {
  const [tempTodoText, setTempTodoText] = useState("");
  const { todos } = useSelector((state) => ({
    todos: state.todos,
  }));
  const dispatch = useDispatch();

  const handleTempTodTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTempTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (tempTodoText) {
      dispatch(
        addTodo({
          id: String(todos.length),
          text: tempTodoText,
        })
      );
      setTempTodoText("");
    } else {
      alert("新しいTodoの内容を入力してください。");
    }
  };

  const handleDelTodo = (id: string) => () => {
    dispatch(delTodo({ id }));
  };

  const handleCheckToggle = (id: string) => () => {
    dispatch(toggleTodo({ id }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {todos.length ? (
        todos.map((todo) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleCheckToggle(todo.id)}
            />
            <span
              style={{
                width: 300,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {todo.text}
            </span>
            <button onClick={handleDelTodo(todo.id)}>x</button>
          </div>
        ))
      ) : (
        <div>Todoはありません</div>
      )}
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <span>新しいTodoの内容</span>
        <input
          type="text"
          value={tempTodoText}
          onChange={handleTempTodTextChange}
          style={{ marginLeft: 16 }}
        />
      </div>
      <button onClick={handleAddTodo} style={{ width: 56 }}>
        追加
      </button>
    </div>
  );
});

export default Hooks;
