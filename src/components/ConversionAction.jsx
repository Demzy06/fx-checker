import Button from "./Button";
import StarIcon from "../assets/icons/icon-star.svg";
import { useCurrencyList } from "../context/CurrencyListContext";

function ConversionAction() {
  const { baseCurrency, quoteCurrency, rateObj } = useCurrencyList();
  return (
    <div className="border-dashed border-light-gray pt-6 ">
      <p className="text-center text-white">
        1 {baseCurrency} = {rateObj.rate} {quoteCurrency}
      </p>
      <span className="flex justify-between w-[78%] m-auto mt-3">
        <Button
          text="Favorite"
          styles="uppercase p-1 pr-3 pl-3 bg-primary-yellow text-[14px] rounded-lg "
          icon={StarIcon}
        />
        <Button
          text="Log Conversion"
          styles="uppercase p-1 pl-2 pr-2 border border-primary-yellow rounded-lg text-white"
        />
      </span>
    </div>
  );
}

export default ConversionAction;
