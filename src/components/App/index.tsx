import React, { useState } from "react";
import "./styles.css";
import Toast from "./Toast";

function App() {
  const [input, setInput] = useState("");
  const [toastList, setToastList] = useState(
    [] as { id: number; text: string }[]
  );

  function inputChange(event: any) {
    setInput(event.target.value);
  }

  function createToast() {
    console.log(toastList);
    setToastList([...toastList, { id: Date.now(), text: input }]);
  }

  function removeToast(removeId: number) {
    console.log(removeId);
    const updatedToastList = toastList.filter(({ id, text }) => {
      return removeId !== id;
    });
    console.log(updatedToastList);
    setToastList(updatedToastList);
  }

  return (
    <main className="main">
      <input type="text" onChange={inputChange}></input>{" "}
      <button onClick={createToast}>Show toast</button>
      <div>
        {toastList.map(({ id, text }) => {
          return (
            <Toast key={id} id={id} text={text} removeEvent={removeToast} />
          );
        })}
      </div>
    </main>
  );
}

export default App;
