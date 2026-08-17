import ArrowDown from "../../assets/icons/icon-chevron-down.svg";
import SelectCurrency from "./SelectCurrency";
import { useCurrencyList } from "../../context/CurrencyListContext";
import { currencyToCountry } from "../../data/currencies";
import ReactCountryFlag from "react-country-flag";

function SendCurrencyInput() {
  const {
    setCurrencyDisplay,
    showCurrencyListSend,
    setShowCurrencyListSend,
    showCurrencyListReceive,
    setShowCurrencyListReceive,
    setBaseCurrency,
    baseCurrency,
    baseCurrencyValue,
    setBaseCurrencyValue,
  } = useCurrencyList();

  return (
    <div className="bg-secondary-gray p-3 rounded-2xl border border-light-gray md:p-4 md:w-[45%]">
      <h2 className="text-primary-gray uppercase text-[17px] font-medium">
        Send
      </h2>
      <div className="mt-8 flex items-center ">
        <input
          value={baseCurrencyValue}
          onChange={(e) => setBaseCurrencyValue(e.target.value)}
          type="text"
          placeholder="0.00"
          className="w-[60%] md:w-[75%] text-white font-bold text-[35px] placeholder:text-primary-gray outline-0 "
        />
        <button
          onClick={() => {
            setCurrencyDisplay((displayed) => !displayed);
            setShowCurrencyListSend((show) => !show);
            if (showCurrencyListReceive === true)
              setShowCurrencyListReceive(false);
          }}
          className="w-31 ml-auto bg-lightbg-gray rounded-lg p-2.5 pl-2.5 pr-2.5 font-medium text-white flex items-center justify-between h-fit border border-light-gray"
        >
          <span className="h-fit w-6 inline-block">
            <ReactCountryFlag
              countryCode={currencyToCountry[baseCurrency]}
              svg
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </span>
          <span className="inline-block text-[14px]">{baseCurrency}</span>
          <span className="inline-block ">
            <img src={ArrowDown} alt="" />
          </span>
        </button>
        <SelectCurrency
          localStorageName="baseCurrency"
          selectCurrency={setBaseCurrency}
          show={setShowCurrencyListSend}
          styles={`${showCurrencyListSend ? "" : "hidden"}  mt-[80%] md:bottom-22 md:left-78`}
        />
      </div>
    </div>
  );
}

export default SendCurrencyInput;
