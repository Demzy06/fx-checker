/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { getCurrencies, getExchangeRate } from "../api/CurrencyApi";

const CurrencyListContext = createContext();

function CurrencyListProvider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [currencyDisplay, setCurrencyDisplay] = useState(false);
  const [showCurrencyListReceive, setShowCurrencyListReceive] = useState(false);
  const [showCurrencyListSend, setShowCurrencyListSend] = useState(false);

  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");

  useEffect(
    function () {
      // if (currencies !== "") return;
      // async function FecthCurrencies() {
      //   try {
      //     const res = await fetch("https://api.frankfurter.dev/v2/currencies");
      //     const data = await res.json();
      //     setCurrencies(data);
      //     console.log(data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }

      currencyDisplay && getCurrencies(setCurrencies, "currencies");
    },
    [currencyDisplay],
  );

  useEffect(
    function name() {
      getExchangeRate("rate", fromCurrency, toCurrency);
    },
    [fromCurrency, toCurrency],
  );

  console.log(currencies);
  return (
    <CurrencyListContext.Provider
      value={{
        currencies,
        setCurrencies,
        currencyDisplay,
        setCurrencyDisplay,
        showCurrencyListSend,
        setShowCurrencyListSend,
        showCurrencyListReceive,
        setShowCurrencyListReceive,
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
      }}
    >
      {children}
    </CurrencyListContext.Provider>
  );
}

function useCurrencyList() {
  const context = useContext(CurrencyListContext);
  return context;
}
export { useCurrencyList, CurrencyListProvider };
