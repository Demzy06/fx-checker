import ArrowIcon from "../../assets/icons/icon-arrow-right.svg";
import DeleteIcon from "../../assets/icons/icon-delete.svg";
import { useCurrencyList } from "../../context/CurrencyListContext";

function LogItem({ logObj }) {
  const { deleteLog } = useCurrencyList();
  return (
    <div className=" bg-secondary-gray border border-light-gray rounded-lg mb-3 flex justify-between items-center p-2.5 pl-3.5 pr-3.5">
      <h1 className="text-primary-gray text-[14px]">1H</h1>
      <div>
        <span className="flex items-center">
          <h2 className="text-white text-[14px]">{logObj.baseCurrency}</h2>
          <span className="ml-1 mr-1">
            <img src={ArrowIcon} alt="" srcset="" className="h-fit" />
          </span>
          <h2 className="text-white text-[14px]">{logObj.quoteCurrency}</h2>
        </span>
      </div>

      <div className="flex items-center">
        <span className="mr-3 text-end flex">
          <p className="text-primary-gray font-medium text-[14px] mr-4">
            {logObj.baseCurrencyValue}
          </p>
          <p className="text-primary-yellow font-medium text-[14px]">
            {logObj.convertedRate.toFixed(2)}
          </p>
        </span>
        <button
          onClick={() => deleteLog(logObj)}
          className="border border-light-gray rounded-lg h-fit p-2 pl-2 pr-2 "
        >
          <img src={DeleteIcon} alt="" srcset="" className="" />
        </button>
      </div>
    </div>
  );
}

export default LogItem;
