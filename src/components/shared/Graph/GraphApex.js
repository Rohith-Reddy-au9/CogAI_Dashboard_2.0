/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Chart from "react-apexcharts";
const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
const ADDING_DATA_RATIO = 0.8;
export default (props) => {
  const nameList = ["a", "b", "c"];
  const defaultDataList = nameList.map((name) => ({
    name: name,
    data: [...Array(12)].map(()=>Math.floor(Math.random()*10)),
    // data:[1,3,4,5,6,7,8,9,10]
  }));
  const [dataList, setDataList] = useState(defaultDataList);
//   console.log(dataList)
  const options = {
    chart: {
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22,
      },
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
      
      tooltip: {
        show: false,
      },

      animations: {
        easing: "smooth",
        dynamicAnimation: {
          speed: 500,
        },
      },
      foreColor: "#0C184B",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#8A90A9","#CA3739","#5072C0"],
    grid: {
      show: false,
    },
    xaxis: {
      color: "#000000",
      label: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend:{
        show:false
    },
    yaxis: {
      show: true,
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        minWidth: 0,
        maxWidth: 160,
        
        style: {
            colors: ["#FFFFFF"],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
        }
    
    },
    },
  };
  return (
    <Chart
      type="line"
      options={options}
      series={dataList}
      height={300}
    />
  );
};
