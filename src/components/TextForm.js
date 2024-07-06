import React, { useState } from "react";
function TextForm(props) {
  const [text, setText] = useState("Enter text here: ");
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };
  return (
    <>
      <div className="container ">
        <h1 style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: `${props.mode === "light" ? "white" : "black"}`,
              color: `${props.mode === "light" ? "black" : "white"}`,
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Reverse the text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: `${props.mode === "light" ? "black" : "white"}` }}
      >
        <h2>Your text summary-</h2>
        <p>Number of words -{text.split(" ").length}</p>
        <p>Number of characters with spaces-{text.length}</p>
        <p>
          Number of characters without spaces-{text.replace(/\s+/g, "").length}
        </p>

        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
    </>
  );
}
export default TextForm;
