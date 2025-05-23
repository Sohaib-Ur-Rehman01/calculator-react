import styles from "../App.module.css";
import { MdHistory } from "react-icons/md";

const CalcHistory = ({ toggleHistory }) => {
  return (
    <>
      <button className={styles.history}>
        <MdHistory onClick={toggleHistory} />
      </button>
    </>
  );
};
export default CalcHistory;
