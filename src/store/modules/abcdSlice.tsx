import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ステートの型
export type AbcdState = {
  a: string;
  b: string;
  c: string;
  d: string;
};

const initialState: AbcdState = {
  a: "",
  b: "",
  c: "",
  d: "",
};

// アクションの引数の型
export type KeyValuePayload = {
  key: string;
  value: string;
};

// リデューサとアクションをまとめて定義できる
const abcdModule = createSlice({
  name: "abcd",
  initialState,
  reducers: {
    setAbcd(state, action: PayloadAction<KeyValuePayload>) {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    },
  },
});

// リデューサのエクスポート
export default abcdModule.reducer;

// アクションのエクスポート
export const { setAbcd } = abcdModule.actions;
