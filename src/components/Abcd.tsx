import React from "react";

import { useSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { setAbcd } from "../store/modules/abcdSlice";

const Abcd = React.memo(() => {
  const { a, b, c, d } = useSelector((state) => ({
    a: state.abcd.a,
    b: state.abcd.b,
    c: state.abcd.c,
    d: state.abcd.d,
  }));
  const dispatch = useDispatch();

  const handleAbcdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAbcd({
        key: event.target.name,
        value: event.target.value,
      })
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <span style={{ width: 40 }}>a：</span>
        <input type="text" name="a" value={a} onChange={handleAbcdChange} />
        <span>{a}</span>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <span style={{ width: 40 }}>b：</span>
        <input type="text" name="b" value={b} onChange={handleAbcdChange} />
        <span>{b}</span>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <span style={{ width: 40 }}>c：</span>
        <input type="text" name="c" value={c} onChange={handleAbcdChange} />
        <span>{c}</span>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <span style={{ width: 40 }}>d：</span>
        <input type="text" name="d" value={d} onChange={handleAbcdChange} />
        <span>{d}</span>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(
              setAbcd({
                key: "a",
                value: (new Date("2021-04-15") as unknown) as string,
              })
            )
          }
        >
          Date型入れる
        </button>
      </div>
    </div>
  );
});

export default Abcd;
