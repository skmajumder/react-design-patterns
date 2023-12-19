import { useState } from "react";
import RenderPropButton from "./RenderPropButton";
import RenderPropValue from "./RenderPropValue";

const RenderProp = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter((counter) => counter + 1);
  const handleDecrement = () => setCounter((counter) => counter - 1);

  return (
    <div>
      <RenderPropButton
        renderLabel={(additionalInfo) => (
          <span>Decrement {additionalInfo}</span>
        )}
        onClick={handleDecrement}
      />
      <RenderPropValue counter={counter} />
      <RenderPropButton
        renderLabel={(additionalInfo) => (
          <span>Increment {additionalInfo}</span>
        )}
        onClick={handleIncrement}
      />
      <div></div>
    </div>
  );
};

export default RenderProp;
