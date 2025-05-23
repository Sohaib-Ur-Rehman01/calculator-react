import Display from "./Components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonsContainer";
import { useState, useEffect, useCallback } from "react";
import ChangeMode from "./Components/ChangeMode";
import CalcHistory from "./Components/CalcHistory";
import HistoryPanal from "./Components/Historypanal";

function App() {
  // const [displayValue, setDisplayValue] = useState("");
  const [calVal, setCalVal] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  // let history = [];
  // console.log(calVal) ;
  // console.log(setCalVal);

  const onButtonClick = useCallback(
    (buttonText) => {
      if (buttonText === "C") {
        // console.log(event.key);
        setCalVal("");

        console.log("Button C h");
      } else if (buttonText === "⌫") {
        setCalVal((prev) => prev.slice(0, -1));
      } else if (buttonText === "=") {
        try {
          const result = eval(calVal);
          setHistory([...history, `${calVal}=${result}`]);
          setCalVal(result.toString());
        } catch (error) {
          setCalVal("Error");
        }
        // setCalVal(result);
      } else {
        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);
      }
      // console.log("Button CLicked ", buttonText);
    },
    [calVal]
  );
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (/[0-9+\-*/=]/.test(key)) {
        onButtonClick(key);
      } else if (key === "Enter" || key === "=") {
        const result = eval(calVal);
        setHistory([...history, `${calVal}=${result}`]);
        setCalVal(result);
      } else if (key === "Escape") {
        onButtonClick("C");
      } else if (key === "Backspace") {
        setCalVal((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onButtonClick, calVal, history]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };
  const clearHistory = () => {
    setHistory([]);
  };
  const userHistoryItem = (historyItem) => {
    const expression = historyItem.split("=")[0].trim();
    setCalVal(expression);
    setShowHistory(false);
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
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className={styles.themeToggle}
        >
          {darkMode ? "☀️" : "🌙"}
        </button> */}
        <ChangeMode
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          // showHistory={showHistory}
        />
        <CalcHistory toggleHistory={toggleHistory} />
        {showHistory && (
          <HistoryPanal
            darkMode={darkMode}
            history={history}
            clearHistory={clearHistory}
            userHistoryItem={userHistoryItem}
          />
        )}
      </div>
    </>
  );
}

export default App;
