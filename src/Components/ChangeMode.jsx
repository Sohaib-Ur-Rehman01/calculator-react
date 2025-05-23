import styles from "../App.module.css";

const ChangeMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <button onClick={toggleDarkMode} className={styles.themeToggle}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </>
  );
};
export default ChangeMode;
