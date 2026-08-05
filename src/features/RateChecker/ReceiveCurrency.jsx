import ArrowDown from "../../assets/icons/icon-chevron-down.svg";
import SelectCurrency from "./SelectCurrency";
import { useCurrencyList } from "../../context/CurrencyListContext";
import { useState } from "react";
import { currencyToCountry } from "../../data/currencies";
import ReactCountryFlag from "react-country-flag";

function ReceiveCurrency() {
  // Created this state to store seleted currency, so flag can be displayed in the btn
  const [clickedCurr, setClickedCurr] = useState("USD");

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
        <output className="w-full text-primary-yellow font-bold text-[35px]">
          {convertedRate.toFixed(2)}
        </output>
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
              countryCode={currencyToCountry[clickedCurr]}
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
          setClickedCurr={setClickedCurr}
        />
      </div>
    </div>
  );
}

export default ReceiveCurrency;
