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
      <div className="mt-3.5 bg-deep-gray p-4 rounded-2xl">
        {/* Send */}
        <SendCurrencyInput />

        {/* Exchange icon */}
        <div className="w-full flex justify-center mt-3.5 mb-3.5">
          <button
            onClick={switchCurrencyPair}
            className="bg-secondary-gray p-3.5 rounded-md border border-light-gray"
          >
            <span className="h-4">
              <img src={ExchangeIcon} alt="exchange-icon" />
            </span>
          </button>
        </div>

        {/* receive */}
        <ReceiveCurrency />

        {/* Conversion Action */}
        <ConversionAction />
      </div>
    </section>
  );
}

export default RateChecker;
