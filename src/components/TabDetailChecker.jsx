import { useTabContext } from "../context/TabContext";
import History from "../features/History/History";

function TabDetailChecker() {
  const { selectedTab } = useTabContext();
  return <div>{selectedTab === "History" && <History />}</div>;
}

export default TabDetailChecker;
