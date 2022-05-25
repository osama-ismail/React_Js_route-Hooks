import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import "./NavigationRoute.css";
import { BrowserRouter as Router } from "react-router-dom";

const NavigationRoute = () => {
  return (
    <ul className="routSection">
      <li className="first-div all-div">
        <NavLink to="/Form">New Card</NavLink>
      </li>
      <li className="second-div all-div">
        <NavLink to="/Preview">your cards</NavLink>
      </li>
    </ul>
    // activeClassName={classes.active}
  );
};

export default NavigationRoute;
