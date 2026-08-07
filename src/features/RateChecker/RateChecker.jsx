import ReceiveCurrency from "../RateChecker/ReceiveCurrency";
import SendCurrencyInput from "./SendCurrencyInput";
import ExchangeIcon from "../../assets/icons/icon-exchange-vertical.svg";
import ConversionAction from "../../components/ConversionAction";
import { useCurrencyList } from "../../context/CurrencyListContext";

function RateChecker() {
  const { switchCurrencyPair } = useCurrencyList();
  return (
    <section>
      <h1 className="uppercase text-white mt-20 text-[20px]">Check the rate</h1>
      <div className="mt-3.5 bg-deep-gray p-4 rounded-2xl rounded-b-none md:flex md:justify-between md:items-center">
        {/* Send */}
        <SendCurrencyInput />

        {/* Exchange icon */}
        <div className="w-full md:w-fit md:h-7 md:mr- md:ml- flex justify-center mt-3.5 mb-3.5 md:items-center">
          <button
            onClick={switchCurrencyPair}
            className="bg-secondary-gray p-3.5 md:w-13 md:p-0 md:h-13 rounded-md border border-light-gray md:flex md:justify-center md:items-center"
          >
            <span className="h-4 md:h-fit  ">
              <img
                src={ExchangeIcon}
                alt="exchange-icon"
                className="md:rotate-90"
              />
            </span>
          </button>
        </div>

        {/* receive */}
        <ReceiveCurrency />
      </div>

      {/* Conversion Action */}
      <div className="bg-deep-gray p-4 rounded-2xl rounded-t-none border-t border-dashed border-light-gray">
        <ConversionAction />
      </div>
    </section>
  );
}

export default RateChecker;
