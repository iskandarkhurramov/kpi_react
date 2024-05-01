import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUpLong } from "react-icons/fa6";
import "./home.css";
const data = [
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati A",
    max: 4000,
    min: 2400,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati B",
    max: 3000,
    min: 1398,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati C",
    max: 2000,
    min: 9800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati D",
    max: 2780,
    min: 3908,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati E",
    max: 1890,
    min: 4800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati F",
    max: 2390,
    min: 3800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati G",
    max: 3490,
    min: 4300,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati A",
    max: 4000,
    min: 2400,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati B",
    max: 3000,
    min: 1398,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati C",
    max: 2000,
    min: 9800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati D",
    max: 2780,
    min: 3908,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati E",
    max: 1890,
    min: 4800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati F",
    max: 2390,
    min: 3800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati G",
    max: 3490,
    min: 4300,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati A",
    max: 4000,
    min: 2400,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati B",
    max: 3000,
    min: 1398,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati C",
    max: 2000,
    min: 9800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati D",
    max: 2780,
    min: 3908,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati E",
    max: 1890,
    min: 4800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati F",
    max: 2390,
    min: 3800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati G",
    max: 3490,
    min: 4300,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati A",
    max: 4000,
    min: 2400,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati B",
    max: 3000,
    min: 1398,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati C",
    max: 2000,
    min: 9800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati D",
    max: 2780,
    min: 3908,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati E",
    max: 1890,
    min: 4800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati F",
    max: 2390,
    min: 3800,
  },
  {
    indicator:
      "Universitetning Ichki tartib qoidalari, Odob-ahloq kodeksi hamda mehnat shartnomasida belgilangan vazifalarni o‘z vaqtida va sifatli bajarish holati G",
    max: 3490,
    min: 4300,
  },
];

function AreaBarChart() {
  const formatToolTiminalue = (value) => {
    return `${value}`;
  };
  const formatAxisLabel = (value) => {
    return `${value}`;
  };
  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1) + " ball";
  };
  return (
    <div className="bar-chart">
      <div className="bar-chart-info mb-8">
        <h5 className="bar-chart-title mb-3 md:text-lg text-md font-bold color text-stone-900">
          Natija
        </h5>
        <div className="chart-info-date flex items-center ">
          <div className="chart-date-value text-xs md:text-2xl font-bold">
            100 ball
          </div>
          <div className="info-data-text flex text-green-600 text-xs md:text-2xl">
            <FaArrowUpLong />
            <p>Oxirgi marta 5 baho</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer minWidth={300} minHeight={350}>
          <BarChart
            width={1000}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              padding={{ left: 10 }}
              dataKey="indicator"
              tickSize={0}
              axisLine={false}
              fontSize={14}
            />
            <YAxis
              padding={{ top: 10, bottom: 10 }}
              tickFormatter={formatAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
            />
            <Tooltip
              formatter={formatToolTiminalue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="max"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="min"
              fill="rgb(83, 165, 6)"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaBarChart;
