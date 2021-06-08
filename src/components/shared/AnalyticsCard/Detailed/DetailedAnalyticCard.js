import React from "react";
import BreifAnalyticsApexChart from "../Brief/BreifAnalyticsApexChart";

const DetailedAnalyticCard = ({ title, subHead, workList = [] }) => {
  return (
    <div className="bg-cogAi-bg-dark shadow-lg rounded-md h-50 ">
      <div className="m-3">
        <div className="text-xl text-white">{title}</div>
        <div className="flex justify-end m-2">
          <BreifAnalyticsApexChart />
        </div>
        <div className="text-gray-500 ">
          {subHead}
          {workList.map((li, idx) => {
            return (
              <h1 className="text-sm">
                {" "}
                {li} <span className="font-bold text-white">{7} mins </span>
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailedAnalyticCard;
