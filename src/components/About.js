

export default function About(props) {
  

  return (
    <>
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#042743" : "white",
        color: props.mode === "dark" ? "white" : "black",
        border:props.mode==="dark"?"solid 1px white":"none"
      }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:props.mode==="dark"?"solid 1px white":"none"
              }}
            >
              Convert To Upper Case
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:props.mode==="dark"?"solid 1px white":"none"
              }}
            >
             You can easily convert text to upper case and it works completely fine.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black",
            border:props.mode==="dark"?"solid 1px white":"none"
          }}
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:props.mode==="dark"?"solid 1px white":"none"
              }}
            >
              Convert To lower case
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:props.mode==="dark"?"solid 1px white":"none"
              }}
            >
             You can easily convert text to lower case by just clicking the convert to lower case buttton and it works completely fine.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:props.mode==="dark"?"solid 1px white":"none"
              }}
            >
              Copy Text
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:props.mode==="dark"?"solid 1px white":"none"
              }}
            >
              You can easily copy the text to clipboard and it works completely fine.
            </div>
          </div>
        </div>
      </div>
  
    </div>
    <div className="container mt-5"
    style={{
      backgroundColor: props.mode === "dark" ? "#042743" : "white",
      color: props.mode === "dark" ? "white" : "black",
      
    }}
    ><h3>About this project</h3>
    <p>This project is made using React Js And this Project is awesome with great learning.</p>
    </div>
    
    </>
  );
}
