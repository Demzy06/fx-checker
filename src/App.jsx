import CurrencyPreview from "./components/CurrencyPreview";
import Header from "./components/Header";
import RateChecker from "./features/RateChecker/RateChecker";
import Tab from "./components/Tab";
import TabDetailChecker from "./components/TabDetailChecker";
import { CurrencyListProvider } from "./context/CurrencyListContext";

function App() {
  return (
    <CurrencyListProvider>
      <div>
        <Header />
        <CurrencyPreview />
        <main className="pl-4 pr-4">
          <RateChecker />
          <Tab />
          <TabDetailChecker />
        </main>
      </div>
    </CurrencyListProvider>
  );
}

export default App;
