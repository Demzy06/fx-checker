import { useHistory } from "../../context/HistoryContext";

const dateRange = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

function DateRangeSelector() {
  const { setDateSelected, dateRangeOption } = useHistory();
  return (
    <div className="">
      <ul className="bg-deep-gray flex justify-between w-full rounded-lg pl-2 pr-2">
        {dateRange.map((date, i) => (
          <li
            onClick={() => setDateSelected(dateRangeOption[i])}
            className="p-2.5 text-[14px] pr-3 pl-3 text-primary-gray"
          >
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DateRangeSelector;
