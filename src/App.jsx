import CurrencyPreview from "./components/CurrencyPreview";
import Header from "./components/Header";
import RateChecker from "./features/RateChecker/RateChecker";
import Tab from "./components/Tab";
import TabDetailChecker from "./components/TabDetailChecker";
import { CurrencyListProvider } from "./context/CurrencyListContext";
import { HistoryContextProvider } from "./context/HistoryContext";

function App() {
  return (
    <CurrencyListProvider>
      <HistoryContextProvider>
        <div>
          <Header />
          <CurrencyPreview />
          <main className="pl-4 pr-4">
            <RateChecker />
            <Tab />
            <TabDetailChecker />
          </main>
        </div>
      </HistoryContextProvider>
    </CurrencyListProvider>
  );
}

export default App;
