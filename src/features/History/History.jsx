import { useHistory } from "../../context/HistoryContext";
import DateRangeSelector from "./DateRangeSelector";
import HistoryChart from "./HistoryChart";
import PreviewTab from "./PreviewTab";
import ChevronFilledGreen from "../../assets/icons/chevron-up-filled-green.svg";
import ChevronFilledRed from "../../assets/icons/chevron-down-filled-red.svg";

function History() {
  const { currencyPairHistory } = useHistory();
  const startRate = currencyPairHistory[0];
  const endRate = currencyPairHistory[currencyPairHistory.length - 1];
  const open = startRate?.rate;
  const change = +startRate?.rate - +endRate?.rate;
  const percentageRate =
    ((startRate?.rate - endRate?.rate) / endRate?.rate) * 100;

  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        <PreviewTab
          text="Open"
          data={open}
          className="text-white text-[17px]"
        />
        <PreviewTab
          text="Last"
          data={endRate?.rate}
          className="text-white text-[17px]"
        />
        <PreviewTab
          text="Change"
          data={change.toFixed(4)}
          className={`${percentageRate < 0 ? "text-primary-red" : "text-[#42eb05]"}  text-[17px]`}
        />
        <PreviewTab
          text="% Change"
          data={`${percentageRate.toFixed(2) > 0 ? "+" : ""}${percentageRate.toFixed(2)}%`}
          className={`${percentageRate < 0 ? "text-primary-red" : "text-[#42eb05]"}  text-[17px]`}
          icon={percentageRate < 0 ? ChevronFilledRed : ChevronFilledGreen}
        />
      </div>
      <div className="mt-6 mb-6 w-fit">
        <DateRangeSelector />
      </div>
      <HistoryChart />
    </section>
  );
}

export default History;
