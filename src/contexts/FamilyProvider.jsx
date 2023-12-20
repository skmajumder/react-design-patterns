import { createContext } from "react";

// * Context API
export const FamilyContext = createContext({});

const FamilyProvider = ({ children }) => {
  const grandParent = "grandParent name is XYZ";
  const familyInfo = { grandParent };

  return (
    <FamilyContext.Provider value={familyInfo}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyProvider;
