import React, { useState } from "react";
import ReactPlayer from "react-player";
import { NotificationAndStatus } from "../components/shared/NotificationsAndStatus/NotificationAndStatus";
import { DropdownComponent } from "../components/shared/Dropdown/DropdownComponent";

const Rewind = () => {
  const [url, setUrl] = useState(
    "https://www.youtube.com/watch?v=_yGifKCmHC0&list=RD_yGifKCmHC0&index=1"
  );
  return (
    <div className="grid grid-cols-2/1 gap-4">
        <div>
      <div className="bg-cogAi-bg-dark m-10 h-4/6 rounded-lg shadow-lg">
        <div className="flex justify-around my-5">
          <div className="flex">
            <DropdownComponent
              Filter="Filter By"
              FilterOptions={["Cam1", "cam2", "cam3", "Cam4", "cam5", "cam6"]}
            />
            <DropdownComponent
              Filter="Date"
              FilterOptions={["Filter1", "Filter2", "Filter3"]}
            />
          </div>
        </div>
        <div className="grid justify-start m-8 ">
          <ReactPlayer controls={true} url={url} height="50vh" width="60vw"/>
        </div>
       
      </div>
      <div className="text-xl text-white m-10">
            Description
            <div className="text-sm text-cogAi-blue">
                Today
                12:45 pm
            </div>
        </div>
      </div>
      <div>
        <NotificationAndStatus />
      </div>
    </div>
  );
};

export default Rewind;
