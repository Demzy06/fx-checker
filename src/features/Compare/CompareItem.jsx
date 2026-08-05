// import flag from "../../assets/images/flags/au.webp";
import StarIcon from "../../assets/icons/icon-star.svg";
import { useCurrencyList } from "../../context/CurrencyListContext";
import { currencyNames, currencyFlags } from "../../data/currencies";
// import { currencyFlags } from "../../data/Currencies";

export default function CompareItem({ rate }) {
  const { baseCurrencyValue } = useCurrencyList();
  const conversion = +baseCurrencyValue * rate[1];
  console.log(baseCurrencyValue);

  function getCurrencyName(code) {
    return currencyNames[code] ?? code;
  }

  const getFlagPath = (currencyCode) => {
    const countryCode = currencyFlags[currencyCode];
    return countryCode ? `/flags/${countryCode}.webp` : "/flags/au.webp";
  };

  return (
    <div className="p-2.5 pl-3.5 pr-3.5 flex justify-between border border-light-gray rounded-lg bg-secondary-gray mb-3">
      <div className="flex items-center">
        {/* <img
          src={flag}
          alt=""
          srcset=""
          className="mr-3 w-6 h-fit rounded-full"
        /> */}
        <img
          src={getFlagPath(rate[0])}
          alt="British flag"
          className="mr-3 w-6 h-fit rounded-full"
        />
        <span>
          <p className="uppercase text-white text-[14px]">{rate[0]}</p>
          <p className="text-primary-gray text-[12px]">
            {getCurrencyName(rate[0])}
          </p>
        </span>
      </div>
      <div className="flex items-center">
        <span className="mr-3 text-end">
          <p className="text-white text-[14px]">{conversion.toFixed(2)}</p>
          <p className="text-primary-gray text-[12px]">@ {rate[1]}</p>
        </span>
        <button className="border border-light-gray rounded-lg h-fit p-2 pl-2 pr-2 ">
          <img src={StarIcon} alt="" srcset="" className="" />
        </button>
      </div>
    </div>
  );
}
