import { useEffect, useState } from "react";
import { useCurrencyList } from "../../context/CurrencyListContext";
import CompareItem from "./CompareItem";
import { currencyFlags } from "../../data/currencies";
import { getLatestRates } from "../../api/CurrencyApi";

function Compare() {
  const { baseCurrency, baseCurrencyValue } = useCurrencyList();
  const [latestCurrenciesRate, setLatestCurrenciesRate] = useState({});
  const currenciesRate = latestCurrenciesRate.rates;
  const currenciesRateArr = currenciesRate && Object.entries(currenciesRate);

  const flagCodeArr = Object.entries(currencyFlags);

  useEffect(
    function () {
      getLatestRates(baseCurrency, setLatestCurrenciesRate);
    },
    [baseCurrency],
  );

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
