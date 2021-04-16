import React from "react";
import Connect from "./components/Hooks";
import Hooks from "./components/Connect";
import Abcd from "./components/Abcd";

const App = () => {
  return (
    <div style={{ maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
      <div>
        <h1>Todoリスト</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ minWidth: "50%" }}>
            <Hooks />
          </div>
          <div style={{ minWidth: "50%" }}>
            <Connect />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1>KeyValueで値を変更</h1>
        <Abcd />
      </div>
    </div>
  );
};

export default App;
