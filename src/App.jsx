import FamilyTree from "./ProviderPattern/FamilyTree";
import FamilyProvider from "./contexts/FamilyProvider";

const App = () => {
  return (
    <>
      <FamilyProvider>
        <FamilyTree />
      </FamilyProvider>
    </>
  );
};

export default App;
