function SelectCurrency() {
  return (
    <div className="bg-secondary-gray p-2 border border-[#585858] rounded-lg hidde absolute left-4 bottom-23 w-[85%] h-70 overflow-y-auto">
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
          <li className="pr-1 pl-1 p-2 text-white">EUR</li>
          <li className="pr-1 pl-1 p-2 text-white">USD</li>
          <li className="pr-1 pl-1 p-2 text-white">GBP</li>
          <li className="pr-1 pl-1 p-2 text-white">JPY</li>
          <li className="pr-1 pl-1 p-2 text-white">NGN</li>
          <li className="pr-1 pl-1 p-2 text-white">EUR</li>
          <li className="pr-1 pl-1 p-2 text-white">EUR</li>
        </ul>
      </div>
    </div>
  );
}

export default SelectCurrency;
