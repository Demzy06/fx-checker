import { useTabContext } from "../context/TabContext";
import Compare from "../features/Compare/Compare";
import History from "../features/History/History";

function TabDetailChecker() {
  const { selectedTab } = useTabContext();
  return (
    <div>
      {selectedTab === "History" && <History />}
      {selectedTab === "Compare" && <Compare />}
    </div>
  );
}

export default TabDetailChecker;
