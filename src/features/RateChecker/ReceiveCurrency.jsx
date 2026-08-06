import ArrowDown from "../../assets/icons/icon-chevron-down.svg";
import SelectCurrency from "./SelectCurrency";
import { useCurrencyList } from "../../context/CurrencyListContext";
import { currencyToCountry } from "../../data/currencies";
import ReactCountryFlag from "react-country-flag";

function ReceiveCurrency() {
  const {
    setCurrencyDisplay,
    showCurrencyListReceive,
    setShowCurrencyListReceive,
    showCurrencyListSend,
    setShowCurrencyListSend,
    setQuoteCurrency,
    quoteCurrency,
    convertedRate,
  } = useCurrencyList();

  return (
    <div className="bg-secondary-gray p-3 rounded-2xl border border-light-gray">
      <h2 className="text-primary-gray uppercase text-[17px] font-medium">
        Receive
      </h2>
      <div className="mt-8 flex items-center">
        {/* Show conversion */}
        <span className="truncate w-[60%] text-primary-yellow font-bold text-[35px]">
          {!convertedRate
            ? "-"
            : new Intl.NumberFormat("en-US", {
                currency: "USD",
              }).format(convertedRate.toFixed(2))}
        </span>
        <button
          onClick={() => {
            setCurrencyDisplay((displayed) => !displayed);
            setShowCurrencyListReceive((show) => !show);
            if (showCurrencyListSend === true) setShowCurrencyListSend(false);
          }}
          className="w-31 ml-auto bg-lightbg-gray rounded-lg p-2.5 pl-2.5 pr-2.5 font-medium text-white flex items-center justify-between h-fit border border-light-gray"
        >
          <span className="h-fit w-6 inline-block">
            <ReactCountryFlag
              countryCode={currencyToCountry[quoteCurrency]}
              svg
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </span>
          <span className="inline-block">{quoteCurrency}</span>
          <span className="inline-block ">
            <img src={ArrowDown} alt="" />
          </span>
        </button>
        <SelectCurrency
          selectCurrency={setQuoteCurrency}
          show={setShowCurrencyListReceive}
          styles={`${showCurrencyListReceive ? "" : "hidden"} -bottom-29 `}
        />
      </div>
    </div>
  );
}

export default ReceiveCurrency;
