import { useTabContext } from "../context/TabContext";
import Compare from "../features/Compare/Compare";
import Favorites from "../features/Favorites/Favorites";
import History from "../features/History/History";
import Logs from "../features/LogConversion/Logs";

function TabDetailChecker() {
  const { selectedTab } = useTabContext();
  return (
    <div>
      {selectedTab === "History" && <History />}
      {selectedTab === "Compare" && <Compare />}
      {selectedTab === "Favorites" && <Favorites />}
      {selectedTab === "Logs" && <Logs />}
    </div>
  );
}

export default TabDetailChecker;
