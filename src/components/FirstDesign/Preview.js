import React, { useEffect, useState } from "react";
import "./Preview.css";
import Card from "../UI_design/Card";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
const Preview = (props) => {
  const data = [];
  const [show, setShow] = useState(props.ingrediants);
  useEffect(() => {
    setShow(props.ingrediants);
  }, [props.ingrediants]);
  const editData = (data1) => {
    let value = show.map((value, index) => {
      value.edit = false;
      if (index == data1) {
        value.edit = true;
      }
      return value;
    });
    setShow(value);
  };
  return (
    <ul>
      {props.ingrediants.map((info, index) => (
        <Card>
          <li key={info.id} onClick={() => editData(index)}>
            <div
              style={{
                color: "aqua",
              }}
            >
              card #{info.id}
            </div>
            <div
              style={{
                color: "white",
              }}
            >
              {"title : "}
              {info.title}
            </div>
            <div
              style={{
                color: "white",
              }}
            >
              {"descreption :"}
              {info.descreption}
            </div>
            {show[index]?.edit && <input type="text"></input>}
          </li>
        </Card>
      ))}
    </ul>
  );
};

export default Preview;
