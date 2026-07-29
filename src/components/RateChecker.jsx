import ReceiveCurrency from "./ReceiveCurrency";
import SendCurrencyInput from "./SendCurrencyInput";
import ExchangeIcon from "../assets/icons/icon-exchange-vertical.svg";
import ConversionAction from "./ConversionAction";

function RateChecker() {
  return (
    <section>
      <h1 className="uppercase text-white mt-20 text-[20px]">Check the rate</h1>
      <div className="mt-3.5 bg-[#171719] p-4 rounded-2xl">
        {/* Send */}
        <SendCurrencyInput />

        {/* Exchange icon */}
        <div className="w-full flex justify-center mt-3.5 mb-3.5">
          <button className="bg-secondary-gray p-3.5 rounded-md border border-light-gray">
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
