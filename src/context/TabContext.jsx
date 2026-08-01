/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const TabContext = createContext();

function TabContextProvider({ children }) {
  const [selectedTab, setSelectedTab] = useState("History");

  return (
    <TabContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

function useTabContext() {
  const context = useContext(TabContext);
  return context;
}
export { useTabContext, TabContextProvider };
