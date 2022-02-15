import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutTextUtils="About"
          mode={darkMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <About/> */}
          <Routes>
            <Route exact path="/"
              element={<TextForm
                showAlert={showAlert}
                heading="Enter Your Text To analyse below:"
                mode={darkMode}
              />}
            />
            <Route exact path="/about"
              element={<About
              mode={darkMode}
              />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
