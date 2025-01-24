import { useState } from "react";
import CreateDonation from "./CreateDonation";

function defaultCounter() {
  console.log("In the default counter");
  return 0;
}

function Donations() {
  //   const [counter, setCounter] = useState(0);
  const [state, setState] = useState({ counter: 0, currency: "$" });

  function decreaseValue() {
    setState((prevCount) => {
      if (prevCount.counter > 0) {
        return { ...prevCount, counter: prevCount.counter - 1 };
      }
      return prevCount;
    });
  }

  function increaseValue() {
    setState((prevCount) => ({
      ...prevCount,
      counter: prevCount.counter + 1,
    }));
  }
  return (
    <div>
      <h2>
        Donation value: {state.counter} {state.currency}
      </h2>
      <CreateDonation
        counter={state.counter}
        increaseValue={increaseValue}
        decreaseValue={decreaseValue}
      />
    </div>
  );
}

export default Donations;
