import React, { useEffect, useState } from "react";
import MainBar from "./MainBar";
import "./MyIngredients.css";
import { Switch, Link, Route } from "react-router-dom";
import NavigationRoute from "./NavigationRoute";
import Preview from "./Preview";
import { BrowserRouter as Router } from "react-router-dom";
import FormInput from "./FormInput";
const MyIngredients = () => {
  const [userInformation, setUserInformation] = useState([]);
  //this function to generate a random number between any two numbers;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let number1 = 0;

  useEffect(() => {
    fetch(
      "https://firstprojectcard-default-rtdb.firebaseio.com/ingrediants.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];

        for (const key in responseData) {
          loadedIngredients.push({
            id: number1,
            title: responseData[key].title,
            descreption: responseData[key].descreption,
          });
          number1++;
        }
        setUserInformation(loadedIngredients);
      });
  }, []);
  const addInformation = (data) => {
    fetch(
      "https://firstprojectcard-default-rtdb.firebaseio.com/ingrediants.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((respone) => {
        return respone.json();
      })
      .then((responesData) => {
        setUserInformation((prevData) => [
          ...prevData,
          { id: getRandomInt(1, 100), ...data },
        ]);
      });
  };
  return (
    <div className="page">
      <MainBar />
      <div className="second-row">
        <Router>
          <NavigationRoute />
          <Route path="/Form" exact>
            <FormInput onAddData={addInformation} num={number1} />
          </Route>
          <Route path="/Preview">
            <Preview ingrediants={userInformation} />
          </Route>
        </Router>
      </div>
    </div>
  );
};
export default MyIngredients;
