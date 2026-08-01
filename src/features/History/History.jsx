import { useHistory } from "../../context/HistoryContext";
import DateRangeSelector from "./DateRangeSelector";
import HistoryChart from "./HistoryChart";
import PreviewTab from "./PreviewTab";

function History() {
  const { currencyPairHistory } = useHistory();
  const startRate = currencyPairHistory[0];
  const endRate = currencyPairHistory[currencyPairHistory.length - 1];
  const open = startRate?.rate;
  const change = +startRate?.rate - +endRate?.rate;
  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        <PreviewTab text="Open" data={open} />
        <PreviewTab text="Last" data={endRate?.rate} />
        <PreviewTab text="Change" data={change.toFixed(4)} />
        <PreviewTab text="% Change" data={change.toFixed(4)} />
      </div>
      <div className="mt-6 mb-6 w-fit">
        <DateRangeSelector />
      </div>
      <HistoryChart />
    </section>
  );
}

export default History;
