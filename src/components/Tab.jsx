import { useState } from "react";
import { useTabContext } from "../context/TabContext";
import ChevronDown from "../assets/icons/icon-chevron-down.svg";

const tabs = ["History", "Compare", "Favorites", "Logs"];

function Tab() {
  const { setSelectedTab, selectedTab } = useTabContext();
  const [tabIsOpen, setTabIsOpen] = useState(false);
  return (
    <div className="mb-5 mt-10 md:border-b md:border-lightbg-gray">
      <div
        className="border border-light-gray p-2 pr-3 pl-3 rounded-lg bg-deep-gray flex justify-between items-center md:hidden"
        onClick={() => setTabIsOpen((isOpen) => !isOpen)}
      >
        <h2 className="text-white uppercase">{selectedTab}</h2>
        <img src={ChevronDown} alt="chevron-down" className="w-4" />
      </div>
      <div
        className={`${tabIsOpen ? "" : "hidden "} md:block md:relative bg-secondary-gray rounded-lg mt-2 p-2 absolute w-[92%] md:w-fit md:bg-transparent`}
      >
        <ul className=" flex flex-col gap-y-2 md:flex md:flex-row md:gap-5 ">
          {tabs.map((tab) => (
            <li
              onClick={() => {
                setSelectedTab(tab);
                setTabIsOpen(false);
              }}
              className={`text-white p-1 pr-2 pl-2 uppercase ${tab === selectedTab ? "md:border-b md:border-[#CEF739]" : ""} `}
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
