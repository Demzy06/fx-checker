import FlagPic from "../assets/images/flags/ar.webp";
import ArrowDown from "../assets/icons/icon-chevron-down.svg";

function ReceiveCurrency() {
  return (
    <div className="bg-[#202022] p-3 rounded-2xl border border-[#3D3D3D]">
      <h2 className="text-primary-gray uppercase text-[17px] font-medium">
        Receive
      </h2>
      <div className="mt-8 flex items-center">
        <output
          type="text"
          value="-"
          className="w-full text-white font-bold text-[35px] placeholder:text-primary-gray outline-0"
        />
        <button className="w-38 ml-auto bg-[#333333] rounded-lg p-2.5 pl-2.5 pr-2.5 font-medium text-white flex items-center justify-between h-fit">
          <span className="h-fit w-6 inline-block">
            <img src={FlagPic} alt="" className="w-full rounded-full" />
          </span>
          <span className="inline-block">EUR</span>
          <span className="inline-block ">
            <img src={ArrowDown} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ReceiveCurrency;
