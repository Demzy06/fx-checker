import FlagPic from "../../assets/images/flags/ar.webp";
import ArrowDown from "../../assets/icons/icon-chevron-down.svg";
import SelectCurrency from "./SelectCurrency";
import { useCurrencyList } from "../../context/CurrencyListContext";
// import { useState } from "react";

// const BASE = "https://api.frankfurter.dev/v2/currencies";

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
        {/* <span className="font-bold text-[35px] text-primary-yellow">
          1,0000
        </span> */}
        <output className="w-[80%] text-primary-yellow font-bold text-[35px]">
          {convertedRate.toFixed(2)}
        </output>
        <button
          onClick={() => {
            // setCurrencyDisplay((displayed) => !displayed);
            setShowCurrencyListReceive((show) => !show);
            if (showCurrencyListSend === true) setShowCurrencyListSend(false);
          }}
          className="w-38 ml-auto bg-[#333333] rounded-lg p-2.5 pl-2.5 pr-2.5 font-medium text-white flex items-center justify-between h-fit"
        >
          <span className="h-fit w-6 inline-block">
            {/* <img src={FlagPic} alt="" className="w-full rounded-full" /> */}
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
