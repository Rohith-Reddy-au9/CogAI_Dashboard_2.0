import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";
import React, { useState,useEffect } from "react";

// const data = [
//   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
// ];


const BriefAnalyticsChart = () => {
const limit =5
  const [perc, setPerc] = useState(0);
  const [data, setData] = useState([]);
  const [maxVal, setMaxVal] = useState(0)
  useEffect(() => {
    setTimeout(() => {
        var val = Math.floor(Math.random() * 10)
        setMaxVal(vl =>Math.max(vl,val))
        setPerc(((limit/maxVal)*100))
      setData((cd) => [
        ...cd,
        {
          name:"cpu",
          val: val,
        },
      ]);
    }, 1000);

  }, [data]);

  return (
    <LineChart
      width={500}
      height={500}
      data={data}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="100%" x2="0" y2="0">
          <stop offset="0" stopColor="white" />
          <stop offset={`${perc}%`} stopColor="white"/>
          <stop offset={`${perc}%`} stopColor="red"/>
          <stop offset="100%" stopColor="red"/>
        </linearGradient>
        <XAxis/>
        <YAxis/>
      </defs>
      <Line
        type="monotone"
        dataKey="val"
        isAnimationActive={false}
        stroke="url(#colorUv)"
        dot={false}
        activeDot={false}
      />
      <Tooltip />
    </LineChart>
  );
};
export default BriefAnalyticsChart;
