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

  const [baseCurrencyValue, setBaseCurrencyValue] = useState(0);

  const [rateObj, setRateObj] = useState({});

  const [favorites, setFavorites] = useState([]);

  const [logs, setLogs] = useState([]);
  const [isCurrPairInFav, setIsCurrPairInFav] = useState(false);

  const convertedRate = +baseCurrencyValue * +rateObj?.rate;
  console.log(rateObj);
  console.log(convertedRate);

  function addToFavorites() {
    const currencyPairFav = {
      baseCurrency,
      quoteCurrency,
      rate: rateObj.rate,
      id: crypto.randomUUID(),

      // percentageChange,
    };

    const found = favorites.find(
      (favorite) =>
        currencyPairFav.baseCurrency === favorite.baseCurrency &&
        currencyPairFav.quoteCurrency === favorite.quoteCurrency,
    );

    found
      ? setFavorites(favorites.filter((favorite) => favorite.id !== found.id))
      : setFavorites((favorites) => [...favorites, currencyPairFav]);
  }

  function addToLogs() {
    if (baseCurrencyValue <= 0) return;
    const currLog = {
      baseCurrency,
      quoteCurrency,
      convertedRate,
      baseCurrencyValue,
      id: crypto.randomUUID(),
    };
    setLogs((logs) => [...logs, currLog]);
  }

  function deleteLog(selectedLog) {
    setLogs(logs.filter((log) => log.id !== selectedLog.id));
  }

  function clearLogs() {
    setLogs([]);
  }

  function removeFavorite(selectedFav) {
    setFavorites(
      favorites.filter((favorite) => favorite.id !== selectedFav.id),
    );
  }

  useEffect(
    function () {
      function favPairChecker() {
        favorites.some(
          (favorite) =>
            baseCurrency === favorite.baseCurrency &&
            quoteCurrency === favorite.quoteCurrency,
        )
          ? setIsCurrPairInFav(true)
          : setIsCurrPairInFav(false);
      }
      favPairChecker();
    },
    [baseCurrency, quoteCurrency, favorites],
  );

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
        logs,
        setLogs,
        addToLogs,
        deleteLog,
        addToFavorites,
        removeFavorite,
        isCurrPairInFav,
        clearLogs,
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
