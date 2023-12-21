import Container from "./HooksPattern/Container";
import FamilyProvider from "./contexts/FamilyProvider";

const App = () => {
  return (
    <>
      <FamilyProvider>
        <Container />
      </FamilyProvider>
    </>
  );
};

export default App;
