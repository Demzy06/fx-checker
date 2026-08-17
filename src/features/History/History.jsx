import { useHistory } from "../../context/HistoryContext";
import DateRangeSelector from "./DateRangeSelector";
import HistoryChart from "./HistoryChart";
import PreviewTab from "./PreviewTab";
import ChevronFilledGreen from "../../assets/icons/chevron-up-filled-green.svg";
import ChevronFilledRed from "../../assets/icons/chevron-down-filled-red.svg";

function History() {
  const { open, endRate, change, percentageRate } = useHistory();

  return (
    <section>
      <div className="grid grid-cols-2 gap-3 md:flex md:gap-5">
        <PreviewTab
          text="Open"
          data={open}
          className="text-white text-[17px] md:w-fit"
        />
        <PreviewTab
          text="Last"
          data={endRate?.rate}
          className="text-white text-[17px]"
        />
        <PreviewTab
          text="Change"
          data={!change ? "-" : change.toFixed(4)}
          className={`${percentageRate < 0 ? "text-primary-red" : "text-[#42eb05]"}  text-[17px]`}
        />
        <PreviewTab
          text="% Change"
          data={`${!percentageRate ? "-" : ` ${percentageRate.toFixed(2) > 0 ? "+" : ""}${percentageRate.toFixed(2)}%`}`}
          // data={` ${percentageRate.toFixed(2) > 0 ? "+" : ""}${percentageRate.toFixed(2)}%`}
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
