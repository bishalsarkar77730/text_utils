import React, {useState} from "react";
import propTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handlecopyClick = () =>{
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState();
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlelowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecopyClick}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        {/* <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p> */}
        <h2>Preview</h2>
        <p>
          {text}
        </p>
        {/* <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview"}
        </p> */}
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: propTypes.string,
};

TextForm.defaultProps = {
  heading:'default value'
};