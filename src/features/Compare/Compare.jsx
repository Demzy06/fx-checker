import { useEffect, useState } from "react";
import { useCurrencyList } from "../../context/CurrencyListContext";
import CompareItem from "./CompareItem";
import { currencyFlags } from "../../data/currencies";
import { getLatestRates } from "../../api/Compare";
import LoadingMessage from "../../components/LoadingMessage";
import Message from "../../components/Message";

function Compare() {
  const { baseCurrency, baseCurrencyValue } = useCurrencyList();
  const [latestCurrenciesRate, setLatestCurrenciesRate] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const currenciesRate = latestCurrenciesRate.rates;
  const currenciesRateArr = currenciesRate && Object.entries(currenciesRate);

  const flagCodeArr = Object.entries(currencyFlags);

  useEffect(
    function () {
      getLatestRates(
        baseCurrency,
        setLatestCurrenciesRate,
        setIsLoading,
        setError,
      );
    },
    [baseCurrency],
  );

  if (isLoading) {
    return <LoadingMessage message="Loading comparison..." />;
  }

  if (error) {
    return (
      <Message
        message="Opps! Something went wrong :("
        messageTwo="No comparison available, Try reloading page"
      />
    );
  }

  return (
    <div className="bg-deep-gray rounded-lg p-4 pr-4 pl-4">
      <div className="flex justify-between">
        <h1 className="uppercase text-white">
          {baseCurrencyValue} from {baseCurrency}
        </h1>
        <h2 className="uppercase text-primary-gray text-[13px]">
          {currenciesRateArr?.length} Pairs
        </h2>
      </div>

      <div className="mt-4">
        {currenciesRateArr?.map((rate, i) => (
          <CompareItem rate={rate} flag={flagCodeArr[i][1]} />
        ))}
      </div>
    </div>
  );
}

export default Compare;
