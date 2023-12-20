import Parent from "./Parent";

const GrandParent = () => {
  return (
    <>
      <h2>Grand Parent</h2>
      <Parent />
    </>
  );
};

export default GrandParent;
