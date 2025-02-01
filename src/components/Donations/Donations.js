import { useState, useMemo } from "react";
import CreateDonation from "./CreateDonation";
import Button from "react-bootstrap/Button";

function Donations() {
  const [counter, setCounter] = useState(0);
  const [dollarCurrency, setDollarCurrency] = useState(true);
  const lev = useMemo(() => {
    return convertToLev(counter);
  }, [counter]);

  function handleCurrency() {
    setDollarCurrency((prevValue) => !prevValue);
  }

  function decreaseValue() {
    setCounter((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  }

  function increaseValue() {
    setCounter((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h2>
        Donation value: {counter} {dollarCurrency ? "$" : "€"}
      </h2>
      <h2>Convert to lev: {lev} lv.</h2>
      <CreateDonation
        counter={counter}
        increaseValue={increaseValue}
        decreaseValue={decreaseValue}
      />
      <Button variant="success" className="m-2" onClick={handleCurrency}>
        Change currency
      </Button>
    </div>
  );
}

function convertToLev(num) {
  for (let index = 0; index < 300000000; index++) {}
  return num * 2;
}

export default Donations;
