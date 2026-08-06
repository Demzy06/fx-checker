import { createContext, useContext, useEffect, useState } from "react";
import { getExchangeHistory } from "../api/CurrencyApi";
import { useCurrencyList } from "./CurrencyListContext";
const HistoryContext = createContext();

const dateRangeOption = [
  { option: 1, days: 1, range: "1D" },
  { option: 2, days: 7, range: "1W" },
  { option: 3, days: 30, range: "1M" },
  { option: 4, days: 90, range: "3M" },
  { option: 5, days: 365, range: "1Y" },
  { option: 6, days: 1825, range: "5Y" },
];

function HistoryContextProvider({ children }) {
  const { baseCurrency, quoteCurrency } = useCurrencyList();
  const [dateSelected, setDateSelected] = useState(dateRangeOption[0]);
  const [date, setDate] = useState("");
  const [currencyPairHistory, setCurrencyPairHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      function getDate() {
        const calcTimeStamp =
          Math.floor(Date.now() / 1000) - dateSelected.days * 24 * 60 * 60;
        const date = new Date(calcTimeStamp * 1000);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
        console.log(date);
        setDate(formattedDate);
      }
      getDate();
    },
    [dateSelected.days],
  );

  useEffect(
    function name() {
      if (date === "") return;
      getExchangeHistory(
        baseCurrency,
        quoteCurrency,
        date,
        setCurrencyPairHistory,
        setIsLoading,
        setError,
      );
    },
    [baseCurrency, quoteCurrency, date],
  );

  return (
    <HistoryContext.Provider
      value={{
        dateSelected,
        setDateSelected,
        date,
        setDate,
        dateRangeOption,
        currencyPairHistory,
        isLoading,
        error,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

function useHistory() {
  const context = useContext(HistoryContext);
  return context;
}
export { useHistory, HistoryContextProvider };
