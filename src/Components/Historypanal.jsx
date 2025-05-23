import styles from "../App.module.css";
const HistoryPanal = ({ darkMode, history, clearHistory, userHistoryItem }) => {
  return (
    <>
      <div
        className={`${styles.historyPanel} ${
          darkMode ? styles.dark : styles.light
        }`}
      >
        <h3>History</h3>
        <button onClick={clearHistory} className={styles.clearBtn}>
          Clear History
        </button>
        {history.length === 0 ? (
          <p>No Calculations yet</p>
        ) : (
          <ul>
            {history.map((item, index) => (
              <li
                key={index}
                onClick={() => userHistoryItem(item)}
                className={styles.historyItem}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default HistoryPanal;
