import React, { useState, useEffect } from "react";
import "./FormDetails.css";
import Card from "../UI_design/Card";

const FormDetails = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescreption, setEnteredDescreption] = useState("");
  useEffect(() => {
    setEnteredTitle(() => props.title);
    setEnteredDescreption(() => props.descreption);
  }, [props.title, props.descreption]);
  const data = {
    title: "",
    descreption: "",
  };
  return (
    <section className="ingredient-form">
      <Card>
        <form>
          <div className="form-control">
            <label
              style={{
                color: 1 ? "aqua" : "",
              }}
              htmlFor="title"
            >
              your Title is{" "}
            </label>
            <input type="text" id="title" value={enteredTitle} />
          </div>
          <div className="form-control">
            <label
              style={{
                color: 1 ? "aqua" : "",
              }}
              htmlFor="amount"
            >
              Description
            </label>
            <input type="text" id="amount" value={enteredDescreption} />
          </div>
        </form>
      </Card>
    </section>
  );
};
export default FormDetails;
