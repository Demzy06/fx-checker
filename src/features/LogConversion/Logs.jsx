import { useCurrencyList } from "../../context/CurrencyListContext";
import LogItem from "./LogItem";

function Logs() {
  const { logs } = useCurrencyList();
  return (
    <div className="p-4 bg-deep-gray rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-white uppercase fl ">Conversion Log</h1>
        <span className="flex justify-between items-center">
          <h2 className="text-primary-gray text-[13px] uppercase mr-5 font-medium">
            1 Logged
          </h2>
          <button className="uppercase p-1.5 rounded-lg pl-3 pr-3 bg-secondary-gray border border-light-gray text-[12px] text-primary-gray ">
            Clear All
          </button>
        </span>
      </div>

      <div className="mt-4">
        {logs?.map((log) => (
          <LogItem logObj={log} />
        ))}
      </div>
    </div>
  );
}

export default Logs;
