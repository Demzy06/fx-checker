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
    <div className="border-dashed border-light-gray pt-6 md:flex md:h-fit md:p-0 md:items-center ">
      <p className="text-center text-white md:flex-5 md:h-full md:w-fit md:text-start md:text-[14px]">
        1 {baseCurrency} = {rateObj.rate} {quoteCurrency}
      </p>
      <span className="flex justify-between w-[85%] m-auto mt-3 md:w-fit md:flex-5 md:m-0 md:justify-end">
        <Button
          text={isCurrPairInFav ? "Favorited" : "Favorite"}
          styles={`uppercase p-1 pr-3 pl-3 ${isCurrPairInFav ? "bg-primary-yellow text-black" : "bg-deep-gray text-white border border-light-gray"}  text-[13px] md:text-[14px] rounded-lg md:mr-2`}
          icon={isCurrPairInFav ? StarIconFilled : StarIcon}
          onClick={addToFavorites}
        />
        <Button
          text="Log Conversion"
          styles={`${baseCurrencyValue <= 0 ? "opacity-100" : "opacity-100"} text-[13px] md:text-[14px] uppercase p-1 pl-2 pr-2 border border-primary-yellow rounded-lg text-white`}
          onClick={addToLogs}
        />
      </span>
    </div>
  );
}

export default ConversionAction;
