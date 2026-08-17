import Button from "../../components/Button";
import { useCurrencyList } from "../../context/CurrencyListContext";
import LogItem from "./LogItem";
import Message from "../../components/Message";

function Logs() {
  const { logs, clearLogs } = useCurrencyList();

  if (logs.length <= 0) {
    return (
      <Message
        message="No conversions logged yet"
        messageTwo="Every conversion is recorded here automatically when you tap LOG CONVERSION. Your log is private to this session and this browser."
      />
    );
  }
  return (
    <div className="p-4 bg-deep-gray rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-white uppercase fl ">Conversion Log</h1>
        <span className="flex justify-between items-center">
          <h2 className="text-primary-gray text-[13px] uppercase mr-5 font-medium">
            {logs.length} Logged
          </h2>

          <Button
            onClick={clearLogs}
            text="Clear All"
            styles="uppercase p-1.5 rounded-lg pl-3 pr-3 bg-secondary-gray border border-light-gray text-[12px] text-primary-gray"
          />
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
