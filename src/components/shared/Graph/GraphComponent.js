import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const GraphComponent = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setData((cd) => [
  //       ...cd,
  //       {
  //         name:"cpu",
  //         val: Math.floor(Math.random() * 5),
  //       },
  //     ]);
  //   }, 1000);
  //   console.log(data, "data");

  // }, [data]);
  const data1 = [
    {
      name: "Page A",
      uv: 4,
      pv: 2,
      amt: 2,
    },
    {
      name: "Page B",
      uv: 3,
      pv: 1,
      amt: 2,
    },
    {
      name: "Page C",
      uv: 2,
      pv: 9,
      amt: 2,
    },
    {
      name: "Page D",
      uv: 2,
      pv: 3,
      amt: 2,
    },
    {
      name: "Page E",
      uv: 1,
      pv: 4,
      amt: 2,
    },
    {
      name: "Page F",
      uv: 2,
      pv: 3,
      amt: 2,
    },
    {
      name: "Page G",
      uv: 3,
      pv: 4,
      amt: 2,
    },
  ];
  return (
    <div className="w-full h-4/5">
    <ResponsiveContainer>
      <LineChart
        data={data1}
        margin={{
          top: 10,
          right: 50,
          left: 0,
          bottom: 0,
        }}
      >
        <YAxis min="1" max="7"  tickLine={false} axisLine={false} />
        <linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <Line
          dot={false}
          isAnimationActive={false}
          type="monotone"
          dataKey="pv"
          stroke="#DC4035"
          strokeWidth="5"
          gradientTransform="#00000, #DC4035"
        />
        <Line
          dot={false}
          isAnimationActive={true}
          type="monotone"
          dataKey="uv"
          stroke="#547CD3"
          strokeWidth="5"
          gradientTransform="#00000, #547CD3"
        />
        <Tooltip/>
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default GraphComponent;
