/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { getCurrencies, getExchangeRate } from "../api/CurrencyApi";
import { getDataFromLocalStorge } from "../helper";

const CurrencyListContext = createContext();

function CurrencyListProvider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [currencyDisplay, setCurrencyDisplay] = useState(false);
  const [showCurrencyListReceive, setShowCurrencyListReceive] = useState(false);
  const [showCurrencyListSend, setShowCurrencyListSend] = useState(false);

  const [baseCurrency, setBaseCurrency] = useState(
    () => localStorage.getItem("baseCurrency") || "EUR",
  );
  const [quoteCurrency, setQuoteCurrency] = useState(
    () => localStorage.getItem("quoteCurrency") || "USD",
  );

  const [baseCurrencyValue, setBaseCurrencyValue] = useState();

  const [rateObj, setRateObj] = useState({});

  const [favorites, setFavorites] = useState(
    () => getDataFromLocalStorge("favorites") || [],
  );

  const [logs, setLogs] = useState(() => getDataFromLocalStorge("logs") || []);

  const [isCurrPairInFav, setIsCurrPairInFav] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const convertedRate = +baseCurrencyValue * +rateObj?.rate;

  function addToFavorites(change) {
    const currencyPairFav = {
      baseCurrency,
      quoteCurrency,
      rate: rateObj.rate,
      id: crypto.randomUUID(),

      percentageChange: change,
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
    console.log(baseCurrencyValue);
    if (+baseCurrencyValue <= 0 || baseCurrencyValue === " ") return;

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

  function switchCurrencyPair() {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
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
      currencyDisplay &&
        getCurrencies(setCurrencies, "currencies", setIsLoading, setError);
    },
    [currencyDisplay],
  );

  useEffect(
    function () {
      getExchangeRate(
        "rate",
        baseCurrency,
        quoteCurrency,
        setRateObj,
        setIsLoading,
        setError,
      );
    },
    [baseCurrency, quoteCurrency],
  );

  useEffect(
    function () {
      localStorage.setItem("logs", JSON.stringify(logs));
    },
    [logs],
  );

  useEffect(
    function () {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    },
    [favorites],
  );

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
        switchCurrencyPair,
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
