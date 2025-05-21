import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
      console.log("Button C h");
    } else if (buttonText === "=") {
      console.log("Button = H");
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
    console.log("Button CLicked ", buttonText);
  };
  return (
    <>
      <div
        className={`${styles.calculator} ${
          darkMode ? styles.dark : styles.light
        }`}
      >
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={styles.themeToggle}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </>
  );
}

export default App;
