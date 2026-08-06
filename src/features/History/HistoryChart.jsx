import { useCurrencyList } from "../../context/CurrencyListContext";
import Chart from "./Chart";

function HistoryChart() {
  const { baseCurrency, quoteCurrency, rateObj } = useCurrencyList();
  const date = new Date();

  const monthDay = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  }).format(date);

  return (
    <div className="bg-deep-gray rounded-xl pl-5 pr-5 p-4 mb-10 border border-lightbg-gray">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-[18px]">{`${baseCurrency}/${quoteCurrency}`}</h1>
        <ul className="text-primary-gray flex justify-between text-[14px] h-fit gap-7">
          <li>{rateObj?.rate}</li>
          <li className="uppercase list-disc">{monthDay}</li>
        </ul>
      </div>
      <div className="h-fit">
        <Chart />
      </div>
    </div>
  );
}

export default HistoryChart;
