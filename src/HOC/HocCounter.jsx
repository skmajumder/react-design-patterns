import { useState } from "react";
import HocCounterValue from "./HocCounterValue";
import HocButton from "./HocButton";
import withConsoleLog from "./withConsoleLog";

const NewHocCounterValue = withConsoleLog(HocCounterValue);

const HocCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter((counter) => counter + 1);
  const handleDecrement = () => setCounter((counter) => counter - 1);

  return (
    <div>
      <HocButton label="Decrement" onClick={handleDecrement} />
      <NewHocCounterValue counter={counter} />
      <HocButton label="Increment" onClick={handleIncrement} />
      <div></div>
    </div>
  );
};

export default HocCounter;
