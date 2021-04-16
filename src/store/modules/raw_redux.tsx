// アクション名
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Todo一つ一つの型
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

// ステートの型
export type TodoState = Todo[];

// ステートの初期値
export const initialState: TodoState = [];

// アクションの引数の型
type AddTodoPayload = {
  id: string;
  text: string;
};

type DelTodoPayload = {
  id: string;
};

type ToggleTodoPayload = {
  id: string;
};

// アクションの戻り値の型
type AddTodoReturn = AddTodoPayload & {
  type: typeof ADD_TODO;
};

type DelTodoReturn = DelTodoPayload & {
  type: typeof DEL_TODO;
};

type ToggleTodoReturn = ToggleTodoPayload & {
  type: typeof TOGGLE_TODO;
};

// アクションの型
type AddTodo = ({ id, text }: AddTodoPayload) => AddTodoReturn;

type DelTodo = ({ id }: DelTodoPayload) => DelTodoReturn;

type ToggleTodo = ({ id }: ToggleTodoPayload) => ToggleTodoReturn;

// アクション
export const addTodo: AddTodo = ({ id, text }) => {
  return {
    type: ADD_TODO,
    id,
    text,
  };
};

export const delTodo: DelTodo = ({ id }) => {
  return {
    type: DEL_TODO,
    id,
  };
};

export const toggleTodo: ToggleTodo = ({ id }) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

// アクションの型まとめ
type Action = AddTodoReturn | DelTodoReturn | ToggleTodoReturn;

// リデューサ
export const todoReducer = (state: TodoState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false,
      });
    case DEL_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
