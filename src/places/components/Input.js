// Imports from React
import { useRef } from "react";

// Imports for Styling
import "./Input.css";

const Input = (props) => {
  // Event Handler Functions
  const changeHandler = (e) => {
    e.preventDefault();
  };

  // Output depending on element prop
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
      />
    ) : (
      <textarea id={props.id} rows={props.row || 3} onChange={changeHandler} />
    );

  // Event Handler Functions

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
