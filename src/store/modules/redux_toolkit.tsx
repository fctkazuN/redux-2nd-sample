import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Todo１つの型
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
// ステートの型
export type TodoState = Todo[];

const initialState: Todo[] = [];

// アクションの引数の型
export type AddTodoPayload = {
  id: string;
  text: string;
};

export type DelTodoPayload = {
  id: string;
};

export type ToggleTodoPayload = {
  id: string;
};

// リデューサとアクションをまとめて定義できる
const todosModule = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<AddTodoPayload>) {
      const { id, text } = action.payload;
      return state.concat({
        id,
        text,
        completed: false,
      });
    },
    delTodo(state, action: PayloadAction<DelTodoPayload>) {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggleTodo(state, action: PayloadAction<ToggleTodoPayload>) {
      const { id } = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
  },
});

// リデューサのエクスポート
export default todosModule.reducer;

// アクションのエクスポート
export const { addTodo, delTodo, toggleTodo } = todosModule.actions;
