// REACT TASK-1

import React, { useState } from "react";

export default function Text(props) {
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="big-container"
        style={{
          width: "60%",
          height: "60%",
          margin: "3em auto",
          boxShadow: "0 0 1em 0.2em rgba(3, 46, 87, 0.2)",
        }}
      >
        <div className="container">
          <div className="my-3">
            <h1>{props.heading}</h1>
            <textarea
              className="form-control my-4"
              id="myBox"
              rows="8"
              style={{ width: "70%", border: "2px solid black" }}
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
        <div className="container">
          <p className="my-3">
            Word Count:{" "}
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word).length
            }
          </p>
        </div>
      </div>
    </>
  );
}
