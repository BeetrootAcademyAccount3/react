import Button from "react-bootstrap/Button";
import styles from "./CreateDonation.module.scss";

function CreateDonation({ counter, decreaseValue, increaseValue }) {
  return (
    <div>
      <h2>Donate money to the shelter:</h2>
      <Button variant="primary" size="lg" onClick={decreaseValue}>
        -
      </Button>
      <span className={styles.counter}>{counter}</span>
      <Button variant="primary" size="lg" onClick={increaseValue}>
        +
      </Button>
    </div>
  );
}

export default CreateDonation;
