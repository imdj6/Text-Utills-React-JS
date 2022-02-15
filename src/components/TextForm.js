import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpclick = () => {
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleOnchange = (event) => { 
    setText(event.target.value);
  };
  const handledownclick=()=>{
    
    let lowercase=text.toLowerCase();
    setText(lowercase);
    props.showAlert("Converted to lowercase!", "success");

  }
  const handleClearText=()=>{
    let cleartext="";
    setText(cleartext);
    props.showAlert("Text Cleared!", "success");
  }
  const handleRemoveExtra=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
    
  }
  const handleCopyText=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }

  return (
  <>
      <div className="mb-3"style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h2>{props.heading}</h2>
        <label htmlFor="exampleFormControlTextarea1" />
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{backgroundColor:props.mode=="dark"?"grey":"white",
          color:props.mode=="dark"?"white":"#042743"
        }}
        ></textarea>
      </div>
      <button className={`btn btn-${props.mode=="dark"?"light":"secondary"}  `} onClick={handleUpclick}>
        Convert to UpperCase
      </button>
      <button className={`btn btn-${props.mode=="dark"?"light":"secondary"}  mx-3`} onClick={handledownclick}>
        Convert to lowercase
      </button>
      <button className={`btn btn-${props.mode=="dark"?"light":"secondary"}  mx-3`} onClick={handleClearText}>
       Clear Text
      </button>
      <button className={`btn btn-${props.mode=="dark"?"light":"secondary"}  mx-3`} onClick={handleRemoveExtra}>
       Remove Extra Space
      </button>
      <button className={`btn btn-${props.mode=="dark"?"light":"secondary"}  mx-3`} onClick={handleCopyText}>
       Copy Text
      </button>

      <div div className="container my-4" style={{color:props.mode==="dark"?"white":"#042743"}}>
       <h3>Your text summary</h3>
          <p>{text.split(" ").length} words and {text.length} characters</p>
           <p>{0.008* text.split(" ").length} Minutes read</p>
           <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
  </>
  );
}
