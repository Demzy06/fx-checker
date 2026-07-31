import { useCurrencyList } from "../../context/CurrencyListContext";

function SelectCurrency({ styles, selectCurrency }) {
  const { currencies } = useCurrencyList();
  // console.log(currencies);
  return (
    <div
      className={`bg-secondary-gray p-2 border border-[#585858] rounded-lg hidde absolute left-4  w-[85%] h-70 overflow-y-auto ${styles}`}
    >
      <input
        type="text"
        className="p-2 pl-4 pr-4 border border-[#9D9D9D] mb-4 w-full rounded-lg text-primary-gray outline-0"
        placeholder="Search currency..."
      />
      <div className="popular">
        <span className="flex justify-between border-b border-light-gray text-primary-gray pb-1">
          <p>Popular</p>
          <p>7</p>
        </span>
        <ul>
          {currencies.map((currency) => (
            <li
              onClick={() => selectCurrency(currency.iso_code)}
              className="pr-1 pl-1 p-2 text-white"
            >
              {currency.iso_code}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectCurrency;
