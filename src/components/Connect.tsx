import React, { useState } from "react";

import { connect } from "react-redux";
import {
  TodoState,
  addTodo,
  AddTodoPayload,
  toggleTodo,
  ToggleTodoPayload,
  delTodo,
  DelTodoPayload,
} from "../store/modules/redux_toolkit";
import { RootState } from "../store/store";

const Connect = (props: Props) => {
  const [tempTodoText, setTempTodoText] = useState("");

  const handleTempTodTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTempTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (tempTodoText) {
      props.addTodo({
        id: String(props.todos.length),
        text: tempTodoText,
      });
      setTempTodoText("");
    } else {
      alert("新しいTodoの内容を入力してください。");
    }
  };

  const handleDelTodo = (id: string) => () => {
    props.delTodo({ id });
  };

  const handleCheckToggle = (id: string) => () => {
    props.toggleTodo({ id });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.todos.length ? (
        props.todos.map((todo) => (
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
};

type Props = {
  todos: TodoState;
  addTodo: React.Dispatch<AddTodoPayload>;
  delTodo: React.Dispatch<DelTodoPayload>;
  toggleTodo: React.Dispatch<ToggleTodoPayload>;
};

const mapStateProps = (state: RootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  delTodo,
  toggleTodo,
};

export default connect(mapStateProps, mapDispatchToProps)(Connect);
