import React, { useState } from "react";
import "./IngredientForm.css";
import Card from "../UI_design/Card";
import FormDetails from "./FormDetails";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
const FormInput = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescreption, setEnteredDescreption] = useState("");
  const [entereId, setEnteredId] = useState(0);
  const number = 0;
  let sd = props.num;
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    props.onAddData({
      title: enteredTitle,
      descreption: enteredDescreption,
      sd,
    });
    setEnteredTitle("");
    setEnteredDescreption("");
  };

  return (
    <section className="sec2">
      <section className="ingredient-form">
        <Card>
          <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
              <label
                style={{
                  color: "aqua",
                }}
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                onChange={(event) => setEnteredTitle(event.target.value)}
                value={enteredTitle}
              />
            </div>
            <div className="form-control">
              <label
                style={{
                  color: "aqua",
                }}
                htmlFor="amount"
              >
                Description
              </label>
              <input
                type="text"
                id="amount"
                onChange={(event) => setEnteredDescreption(event.target.value)}
                value={enteredDescreption}
              />
            </div>
            <div className="ingredient-form__actions">
              <button type="submit">save</button>
            </div>
          </form>
        </Card>
      </section>
      <FormDetails title={enteredTitle} descreption={enteredDescreption} />
    </section>
  );
};

export default FormInput;
