import { useContext } from "react";
import InnerChild from "./InnerChild";
import { FamilyContext } from "../contexts/FamilyProvider";

const Child = () => {
  const { grandParent } = useContext(FamilyContext);
  console.log(grandParent);
  return (
    <>
      <h4>Child</h4>
      <InnerChild />
    </>
  );
};

export default Child;
