const tabs = ["History", "Compare", "Favorite", "Log"];

function Tab() {
  return (
    <div className="mb-10 mt-10">
      <div className="border border-light-gray p-2  rounded-lg bg-[#171719]">
        <h2 className="text-white uppercase">History</h2>
      </div>
      <div className="hidden bg-secondary-gray rounded-lg mt-2 p-2">
        <ul className=" flex flex-col gap-y-2">
          {tabs.map((tab) => (
            <li className="text-white p-1 pr-2 pl-2">{tab}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tab;
