import { useState, useMemo, useRef, useEffect } from "react";
import CreateDonation from "./CreateDonation";
import Button from "react-bootstrap/Button";

function Donations() {
  const [counter, setCounter] = useState(0);
  const [currencyDollar, setCurrencyDollar] = useState(true);
  const lev = useMemo(() => {
    return convertToLev(counter);
  }, [counter]);

  function handleCurrency() {
    setCurrencyDollar((prevState) => !prevState);
  }

  function decreaseValue() {
    setCounter((prevCount) => (prevCount > 0 ? prevCount + 1 : prevCount));
  }

  function increaseValue() {
    setCounter((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h2>
        Donation value: {counter} {currencyDollar ? "$" : "€"}
      </h2>
      <h2>In leva:{lev} lv.</h2>
      <CreateDonation
        counter={counter}
        increaseValue={increaseValue}
        decreaseValue={decreaseValue}
      />
      <Button variant="primary" onClick={handleCurrency}>
        Primary
      </Button>
    </div>
  );
}

function convertToLev(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default Donations;
