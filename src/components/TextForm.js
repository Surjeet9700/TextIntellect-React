import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase", "success");
  };
  
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase", "success");
  };
  

  const handleClearClick = () => {
    let newText = ' ';
    setText(newText);
    props.showAlert("text cleared", "danger");

  };


  // function toCamelCase(text) {
  //   return text.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
  // }

  function textToSpeech() {
    const Speech = new SpeechSynthesisUtterance();
    Speech.lang = 'en';
    Speech.text = text;
    window.speechSynthesis.speak(Speech);
    props.showAlert("speaking", "success");

  }

  
  
  const handleMiddleClick = () => {
    const words = text.split(" ");
    const newText = words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
    props.showAlert("converted to CamelCase", "success");

  };
  
  // this is array of stored colors
  
  const changeColor = (number) =>{
    document.getElementById('myBox').style.color = color[number];
    props.showAlert("Changing the color", "success");

  }
  const color = ['red', 'blue', 'grey', 'orange', 'green', 'black', 'pink', 'violet', 'teal'];
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  const handleCopy = () => {
    const text = document.querySelector("#myBox");
    if (text) {
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copying to clipboard", "success");
      // console.log("i m at copy function");

    }
  };
  
  
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'black' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-2" onClick={handleMiddleClick}>
          Convert to CamelCase
        </button>
        <button className="btn btn-primary mx-1" onClick={textToSpeech}>
        speak
        </button>
        <button className="btn btn-primary mx-1" type="button" onClick={() => changeColor(Math.floor(Math.random() * 5))}>Change Color</button>
          <button className="btn btn-primary mx-1" type="button" onClick={handleCopy}>Copy Text</button>

        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>
      <h2>Your Text Summary</h2>
        <p>
        {text.length === 0 ? "0 " : text.trim().split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.trim().split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in the textbox to preview it here " }</p>
      </div>
    </>
  );
}
