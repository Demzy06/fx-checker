import Button from "./Button";
import StarIcon from "../assets/icons/icon-star.svg";
import StarIconFilled from "../assets/icons/icon-star-filledblack.svg";
import { useCurrencyList } from "../context/CurrencyListContext";

function ConversionAction() {
  const {
    baseCurrency,
    quoteCurrency,
    rateObj,
    addToFavorites,
    addToLogs,
    isCurrPairInFav,
    baseCurrencyValue,
  } = useCurrencyList();

  return (
    <div className="border-dashed border-light-gray pt-6 ">
      <p className="text-center text-white">
        1 {baseCurrency} = {rateObj.rate} {quoteCurrency}
      </p>
      <span className="flex justify-between w-[80%] m-auto mt-3">
        <Button
          text={isCurrPairInFav ? "Favorited" : "Favorite"}
          styles={`uppercase p-1 pr-3 pl-3 ${isCurrPairInFav ? "bg-primary-yellow text-black" : "bg-deep-gray text-white border border-light-gray"}  text-[14px] rounded-lg`}
          icon={isCurrPairInFav ? StarIconFilled : StarIcon}
          onClick={addToFavorites}
        />
        <Button
          text="Log Conversion"
          styles={`${baseCurrencyValue <= 0 ? "opacity-100" : "opacity-100"} uppercase p-1 pl-2 pr-2 border border-primary-yellow rounded-lg text-white`}
          onClick={addToLogs}
        />
      </span>
    </div>
  );
}

export default ConversionAction;
