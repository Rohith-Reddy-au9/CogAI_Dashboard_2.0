import React, { useState } from "react";
import ButtonComponent from "../components/shared/Buttons/ButtonComponent";
import { DropdownComponent } from "../components/shared/Dropdown/DropdownComponent";
import BriefAnalyticCard from "../components/shared/AnalyticsCard/Brief/BriefAnalyticCard";
import DetailedAnalyticCard from "../components/shared/AnalyticsCard/Detailed/DetailedAnalyticCard";
import GraphApex from "../components/shared/Graph/GraphApex";
import VideoPlayerComponent from "../components/shared/VideoPlayer/VideoPlayerComponent";
import {
  CameraIconFill,
  CameraIconMinimal,
} from "../components/shared/Icons/CameraIcon";
import {
  LocationIconFill,
  LocationIconMinimal,
} from "../components/shared/Icons/LocationIcon";
import {
  AnalyticsIconFill,
  AnalyticsIconMinimal,
} from "../components/shared/Icons/AnalyticsIcon";
import {
  SettingIconFill,
  SettingIconMinimal,
} from "../components/shared/Icons/SettingsIcon";
import LocationMapComponent from "../components/shared/LocationMap/LocationMapComponent";
import { NotificationAndStatus } from "../components/shared/NotificationsAndStatus/NotificationAndStatus";


export const Home = () => {
  const [dashBoard, setDashBoard] = useState(1);

  return (
    <div className="m-3  ">
      <div
        className="min-h-9/10  grid grid-cols-2/1 gap-4 m-3 "
        id="HomeContainer"
      >
        <div className="grid grid-rows-2 gap-4 " id="block0">
          <div
            className="grid grid-cols-2/1  bg-cogAi-bg-dark rounded-lg shadow-lg "
            id="block00"
          >

            <div>
              <div className="flex justify-around my-5" id="block000">
                <div className="flex">
                  <DropdownComponent
                    Filter="Filter By"
                    FilterOptions={[
                      "Cam1",
                      "cam2",
                      "cam3",
                      "Cam4",
                      "cam5",
                      "cam6",
                    ]}
                  />
                  <DropdownComponent
                    Filter="Date"
                    FilterOptions={["Filter1", "Filter2", "Filter3"]}
                  />
                </div>
                <div className="flex justify-between ">
                  <ButtonComponent />
                  <ButtonComponent />
                  <ButtonComponent />
                  <ButtonComponent />
                </div>
              </div>
              <div className="pl-2 pt-10 h-full w-full">
                {
                  {
                    0: <VideoPlayerComponent />,
                    1:<LocationMapComponent/>,
                    2: (
                      <div className="shadow-lg">
                        <GraphApex />
                      </div>
                    ),
                    3: <h2>Setting Component</h2>,
                  }[dashBoard]
                }
              </div>
            </div>


            <div className="" id="block001">
              <div className="flex justify-between my-5 mx-10">
                {dashBoard === 0 ? (
                  <CameraIconFill />
                ) : (
                  <div onClick={() => setDashBoard(0)}>
                    <CameraIconMinimal />
                  </div>
                )}
                {dashBoard === 1 ? (
                  <LocationIconFill />
                ) : (
                  <div onClick={() => setDashBoard(1)}>
                    <LocationIconMinimal />
                  </div>
                )}
                {dashBoard === 2 ? (
                  <AnalyticsIconFill />
                ) : (
                  <div onClick={() => setDashBoard(2)}>
                    <AnalyticsIconMinimal />
                  </div>
                )}
                {dashBoard === 3 ? (
                  <SettingIconFill />
                ) : (
                  <div onClick={() => setDashBoard(3)}>
                    <SettingIconMinimal />
                  </div>
                )}
              </div>
              
              <div className="divide-y  divide-gray-400 m-10 space-y-2">
                <BriefAnalyticCard
                  title="Operation Analytics"
                  percentage={33}
                  color="red"
                />
                <BriefAnalyticCard
                  title="Machine ANALYTICS"
                  percentage={33}
                  color="red"
                />
                <BriefAnalyticCard
                  title="Plant operator ANALYTICS"
                  percentage={33}
                  color="red"
                />
              </div>
            </div>
          </div>


          <div className="bg-cogAi-bg rounded-lg shadow-lg" id="block10">
            <div className="flex justify-between">
              <div className="text-white text-3xl my-2">Activity</div>
              <div></div>
            </div>


            <div className=" grid grid-cols-3 gap-5 ">
              <DetailedAnalyticCard
                title="Operator Analytics"
                subHead="Operator Present in place 	&#8594;"
                workList={["Operator Missing ", "Operator Crowding"]}
              />
              <DetailedAnalyticCard
                title="Operator Analytics"
                subHead="Operator Present in place 	&#8594;"
                workList={["Operator Missing ", "Operator Crowding"]}
              />
              <DetailedAnalyticCard
                title="Operator Analytics"
                subHead="Operator Present in place 	&#8594;"
                workList={["Operator Missing ", "Operator Crowding"]}
              />
              <DetailedAnalyticCard
                title="Operator Analytics"
                subHead="Operator Present in place 	&#8594;"
                workList={["Operator Missing ", "Operator Crowding"]}
              />
              <DetailedAnalyticCard
                title="Operator Analytics"
                subHead="Operator Present in place 	&#8594;"
                workList={["Operator Missing ", "Operator Crowding"]}
              />
              <DetailedAnalyticCard
                title="Operator Analytics"
                subHead="Operator Present in place 	&#8594;"
                workList={["Operator Missing ", "Operator Crowding"]}
              />
            </div>
          </div>
        </div>
        <NotificationAndStatus/>
      </div>
    </div>
  );
};
