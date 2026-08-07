import CurrencyPreview from "./components/CurrencyPreview";
import Header from "./components/Header";
import RateChecker from "./features/RateChecker/RateChecker";
import Tab from "./components/Tab";
import TabDetailChecker from "./components/TabDetailChecker";
import { CurrencyListProvider } from "./context/CurrencyListContext";
import { HistoryContextProvider } from "./context/HistoryContext";
import { TabContextProvider } from "./context/TabContext";

function App() {
  return (
    <CurrencyListProvider>
      <HistoryContextProvider>
        <div>
          <Header />
          <CurrencyPreview />
          <main className="pl-4 pr-4 md:pr-10 md:pl-10 lg:pl-30 lg:pr-30">
            <RateChecker />
            <TabContextProvider>
              <Tab />
              <TabDetailChecker />
            </TabContextProvider>
          </main>
        </div>
      </HistoryContextProvider>
    </CurrencyListProvider>
  );
}

export default App;
