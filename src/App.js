import React from "react";
import { produce } from "immer";
import "./styles.css";

export default function App() {
  const [inputState, setInputState] = React.useState({ foo: "bar" });

  return (
    <div className="App">
      <input
        onChange={(e) => {
          e.persist();
          setInputState(
            produce((draft) => {
              draft.e = e.target?.value;
            })
          );
        }}
      />
      {JSON.stringify(inputState)}
    </div>
  );
}
