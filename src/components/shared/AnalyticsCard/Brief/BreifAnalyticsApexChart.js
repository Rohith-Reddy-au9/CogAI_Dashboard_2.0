import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
const ADDING_DATA_RATIO = 0.8;

const BreifAnalyticsApexChart = () => {
  const nameList = ["a"];
  const defaultDataList = nameList.map((name) => ({
    name: name,
    data: [],
  }));
  const [dataList, setDataList] = useState(defaultDataList);

  useEffect(() => {
    const addDataRandomly = (data) => {
      if (Math.random() < 1 - ADDING_DATA_RATIO) {
        return data;
      }
      return [
        ...data,
        {
          x: new Date(),
          y: (Math.random() * 10).toFixed(0),
        },
      ];
    };
    const interval = setInterval(() => {
      setDataList(
        dataList.map((val) => {
          return {
            name: val.name,
            data: addDataRandomly(val.data),
          };
        })
      );
    }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

    return () => clearInterval(interval);
  });

  const options = {
    chart: {
      // dropShadow: {
      //   enabled: false,
      //   opacity: 0.3,
      //   blur: 5,
      //   left: -7,
      //   top: 22,
      // },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.0,
        },
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      tooltip: {
        show: false,
      },

      animations: {
        easing: "smooth",
        dynamicAnimation: {
          speed: 500,
        },
      },
      foreColor: "aqua",
      toolbar: {
        show: false,
      },
    },
    
    stroke: {
      curve: "smooth",
    },
    colors: ["#FE321B"],
    grid: {
      show: false,
    },
    xaxis: {
      color: "#000000",
      label: {
        show: false,
      },
      type: "datetime",
      range: TIME_RANGE_IN_MILLISECONDS,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },
  };
  return (
    <Chart
      type="line"
      options={options}
      series={dataList}
      width={200}
      height={50}
    />
  );
};


export default BreifAnalyticsApexChart