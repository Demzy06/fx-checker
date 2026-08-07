function CurrencyCount() {
  return (
    <div className="flex items-center">
      <ul className="flex justify-between items-center text-primary-gray uppercase text-[10px] md:text-[11px] gap-x-6 list-d">
        <li>
          <span className="mr-3">201</span>Currencies
        </li>
        <li className="list-disc">EDD</li>
        <li className="list-disc">ECB data</li>
      </ul>
    </div>
  );
}

export default CurrencyCount;
