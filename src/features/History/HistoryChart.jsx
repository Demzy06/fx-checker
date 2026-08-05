import Chart from "./Chart";

function HistoryChart() {
  return (
    <div className="bg-deep-gray rounded-xl pl-5 pr-5 p-4 mb-10 border border-[#2E2E2E]">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-[18px]">USD/EUR</h1>
        <ul className="text-primary-gray flex justify-between text-[14px] h-fit gap-7">
          <li>0.0673</li>
          <li className="uppercase list-disc">May 14 16:00 CET</li>
        </ul>
      </div>
      <div className="h-fit">
        <Chart />
      </div>
    </div>
  );
}

export default HistoryChart;
