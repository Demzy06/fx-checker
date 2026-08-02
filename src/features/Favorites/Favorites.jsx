import ArrowIcon from "../../assets/icons/icon-arrow-right.svg";
import StarIcon from "../../assets/icons/icon-star.svg";
import { useCurrencyList } from "../../context/CurrencyListContext";

function Favorites() {
  return (
    <div className="p-4 bg-deep-gray rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-white uppercase">Pinned Pairs</h1>
        <h2 className="text-primary-gray text-[13px]">1 Favorites</h2>
      </div>

      <div className="mt-4 bg-secondary-gray border border-light-gray rounded-lg mb-3 flex justify-between items-center p-2.5 pl-3.5 pr-3.5">
        <div>
          <span className="flex items-center">
            <h2 className="text-white">EUR</h2>
            <span className="ml-1 mr-1">
              <img src={ArrowIcon} alt="" srcset="" className="h-fit" />
            </span>
            <h2 className="text-white">USD</h2>
          </span>
        </div>
        <div className="flex items-center">
          <span className="mr-3 text-end">
            <p className="text-white text-[14px]">0.69</p>
            <p className="text-primary-gray text-[12px]">-0.078%</p>
          </span>
          <button className="border border-light-gray rounded-lg h-fit p-2 pl-2 pr-2 ">
            <img src={StarIcon} alt="" srcset="" className="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
