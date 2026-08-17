import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useHistory } from "../../context/HistoryContext";
import { useCurrencyList } from "../../context/CurrencyListContext";
import LoadingMessage from "../../components/LoadingMessage";
import Message from "../../components/Message";
function Chart() {
  const { baseCurrency, quoteCurrency } = useCurrencyList();
  const { currencyPairHistory, isLoading, error } = useHistory();

  const history = currencyPairHistory.map((curHistory) => {
    return { date: curHistory.date, rate: curHistory.rate };
  });

  if (isLoading) {
    return <LoadingMessage message="Loading history rates..." />;
  }

  if (error) {
    return (
      <Message
        message="No chart data available"
        messageTwo={`We couldn't load rate history for ${baseCurrency}/${quoteCurrency} right now. This usually clears up in a minute, if it doesn't reload page`}
      />
    );
  }

  return (
    <div className="bg-deep-gray rounded  mt-1 pl-2 pr-2">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={history}
          padding={{ left: 0, right: 0 }}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CEF739" stopOpacity={0.35} />

              <stop offset="95%" stopColor="#CEF739" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="rgba(255,255,255,.12)" strokeDasharray="4 4" />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickMargin={12}
            tick={{
              fill: "#9CA3AF",
              fontSize: 11,
            }}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
          />

          <YAxis
            domain={["dataMin", "dataMax"]}
            tickFormatter={(value) => value.toFixed(4)}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#9CA3AF",
              fontSize: 11,
            }}
            width={50}
          />

          <Tooltip
            cursor={{
              stroke: "#555",
              strokeDasharray: "4 4",
            }}
            contentStyle={{
              background: "#252932",
              border: "none",
              borderRadius: "12px",
              color: "white",
            }}
          />

          <Area
            type="natural"
            dataKey="rate"
            stroke="#E8F26B"
            strokeWidth={2}
            fill="url(#chartFill)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#E8F26B",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
