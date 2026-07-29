import DateRangeSelector from "./DateRangeSelector";
import HistoryChart from "./HistoryChart";
import PreviewTab from "./PreviewTab";

function History() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        <PreviewTab />
        <PreviewTab />
        <PreviewTab />
        <PreviewTab />
      </div>
      <div className="mt-6 mb-6 w-fit">
        <DateRangeSelector />
      </div>
      <HistoryChart />
    </section>
  );
}

export default History;
