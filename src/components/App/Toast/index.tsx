import React from "react";
import "./styles.css";
import svg from "./close.svg";

interface IToast {
  id: number;
  text: string;
  removeEvent: (id: number) => void;
}

function Toast(props: IToast) {
  const { text, removeEvent, id } = props;

  return (
    <div className="toastList">
      <span>{text}</span>
      <button onClick={() => removeEvent(id)}>{svg}</button>
    </div>
  );
}

export default Toast;
