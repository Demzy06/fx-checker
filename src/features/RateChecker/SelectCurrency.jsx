import { useCurrencyList } from "../../context/CurrencyListContext";
import ReactCountryFlag from "react-country-flag";
import { currencyToCountry } from "../../data/currencies";

function SelectCurrency({ styles, selectCurrency, show }) {
  const { currencies } = useCurrencyList();

  return (
    <div
      className={`bg-secondary-gray p-2 border border-[#585858] rounded-lg hidde absolute left-4  w-[85%] h-70 overflow-y-auto ${styles}`}
    >
      <input
        type="text"
        className="p-2 pl-4 pr-4 border border-primary-gray mb-4 w-full rounded-lg text-primary-gray outline-0"
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
              onClick={() => {
                selectCurrency(currency.iso_code);
                show((displayed) => !displayed);
              }}
              className="pr-1 pl-1 p-2 text-white flex items-center"
            >
              <span className="mr-3">
                <ReactCountryFlag
                  countryCode={currencyToCountry[currency.iso_code]}
                  svg
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </span>
              {currency.iso_code}
              <span className="ml-3 text-primary-gray">
                <p className="text-[12px]">{currency.name}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectCurrency;
