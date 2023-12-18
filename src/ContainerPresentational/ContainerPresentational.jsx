import { useState } from "react";
import Button from "./Button";
import CounterValue from "./CounterValue";

const ContainerPresentational = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter((count) => count + 1);
  const handleDecrement = () => setCounter((count) => count - 1);

  return (
    <div>
      <Button label="Decrement" onClick={handleDecrement} />
      <CounterValue counter={counter} />
      <Button label="Increment" onClick={handleIncrement} />
    </div>
  );
};

export default ContainerPresentational;
