/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
const HistoryContext = createContext();

const dateRangeOption = [
  { option: 1, days: 1 },
  { option: 2, days: 7 },
  { option: 3, days: 30 },
  { option: 4, days: 90 },
  { option: 5, days: 365 },
  { option: 6, days: 1825 },
];

function HistoryContextProvider({ children }) {
  const [dateSeleted, setDateSelected] = useState(dateRangeOption[0]);
  const [date, setDate] = useState();

  useEffect(
    function () {
      function getDate() {
        const calcTimeStamp =
          Math.floor(Date.now() / 1000) - dateSeleted.days * 24 * 60 * 60;
        const date = new Date(calcTimeStamp * 1000);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
        console.log(date);
        setDate(formattedDate);
      }
      getDate();
    },
    [dateSeleted.days],
  );

  useEffect(function name() {}, []);

  return (
    <HistoryContext.Provider
      value={{
        dateSeleted,
        setDateSelected,
        date,
        setDate,
        dateRangeOption,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

function useHistory() {
  const context = useContext(HistoryContext);
  return context;
}
export { useHistory, HistoryContextProvider };
