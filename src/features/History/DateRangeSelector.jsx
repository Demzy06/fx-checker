import { useHistory } from "../../context/HistoryContext";

const dateRange = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

function DateRangeSelector() {
  const { setDateSelected, dateRangeOption, dateSelected } = useHistory();
  return (
    <div className="">
      <ul className="bg-deep-gray flex justify-between w-f rounded-lg pl-2 pr-2 ">
        {dateRange.map((date, i) => (
          <li
            onClick={() => setDateSelected(dateRangeOption[i])}
            className={`${date == dateSelected.range ? "bg-lightbg-gray" : "bg-tranparent"} p-2 text-[12px] pr-3 pl-3 text-primary-gray rounded-lg `}
          >
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DateRangeSelector;
