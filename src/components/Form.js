import React from "react";
import Todolist from "./Todolist";

const Form = () => {
  return (
    <form>
      <input type="text" />
      <button className="submit" type="submit">
        Submit
      </button>
      <Todolist />
    </form>
  );
};
export default Form;
