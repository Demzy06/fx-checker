import { useState } from "react";
import { useTabContext } from "../context/TabContext";

const tabs = ["History", "Compare", "Favorites", "Logs"];

function Tab() {
  const { setSelectedTab, selectedTab } = useTabContext();
  const [tabIsOpen, setTabIsOpen] = useState(false);
  return (
    <div className="mb-10 mt-10">
      <div
        className="border border-light-gray p-2  rounded-lg bg-deep-gray"
        onClick={() => setTabIsOpen((isOpen) => !isOpen)}
      >
        <h2 className="text-white uppercase">{selectedTab}</h2>
      </div>
      <div
        className={`${tabIsOpen ? "" : "hidden"} bg-secondary-gray rounded-lg mt-2 p-2 absolute w-[92%]`}
      >
        <ul className=" flex flex-col gap-y-2">
          {tabs.map((tab) => (
            <li
              onClick={() => {
                setSelectedTab(tab);
                setTabIsOpen(false);
              }}
              className="text-white p-1 pr-2 pl-2 uppercase"
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tab;
