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

  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [quoteCurrency, setQuoteCurrency] = useState("USD");

  const [baseCurrencyValue, setBaseCurrencyValue] = useState("");

  const [rateObj, setRateObj] = useState({});

  const [favorites, setFavorites] = useState([]);

  console.log(rateObj);
  const convertedRate = +baseCurrencyValue * rateObj?.rate;
  console.log(convertedRate);

  useEffect(
    function () {
      currencyDisplay && getCurrencies(setCurrencies, "currencies");
    },
    [currencyDisplay],
  );

  useEffect(
    function name() {
      getExchangeRate("rate", baseCurrency, quoteCurrency, setRateObj);
    },
    [baseCurrency, quoteCurrency],
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
        baseCurrency,
        setBaseCurrency,
        quoteCurrency,
        setQuoteCurrency,
        baseCurrencyValue,
        setBaseCurrencyValue,
        convertedRate,
        rateObj,
        favorites,
        setFavorites,
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
