import styles from "./ButtonsContainer.module.css";

const buttonNames = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "5",
  "-",
  "6",
  "7",
  "8",
  "*",
  "9",
  "0",
  ".",
  "/",
  "=",
];
// console.log(buttonNames.length);
const ButtonContainer = ({ onButtonClick }) => {
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles.buttons}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
