import React, { useState } from "react";
import MapLayout from "../../../assets/icons/Utils/Location/MapLayout.png";
import { CameraIconFill } from "../Icons/CameraIcon";
import { ModalComponent } from "../Modal/ModalComponent";
const LocationMapComponent = () => {
  const [Head, setHead] = useState("");
  const [subHead, setSubHead] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url(${MapLayout}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="grid grid-cols-5 grid-rows-5  ">
        <div
          className=" col-start-3 col-end-4 h-7 justify-self-center cursor-pointer mt-4 "
          onClick={() => {
            setHead("Cam1");
            setSubHead("19 Mar 2021");
            setOpen(true);
          }}
        >
          <CameraIconFill color="gray" w={7} />
        </div>
        <div className=" col-start-1 cursor-pointer justify-self-center ">
          <CameraIconFill color="gray" w={7} />
        </div>
        <div className=" col-start-2 col-end-3 cursor-pointer justify-self-center ">
          <CameraIconFill color="gray" w={7} />
        </div>
        <div className=" row-start-3 col-start-3 col-end-4 justify-self-center cursor-pointer">
          <CameraIconFill color="gray" w={7} />
        </div>
        <div className=" row-start-3 col-start-4 col-end-5 justify-self-center cursor-pointer">
          <CameraIconFill color="red" w={7} />
        </div>
        <div className=" row-start-4 col-start-1 cursor-pointer justify-self-center ">
          <CameraIconFill color="gray" w={7} />
        </div>
        <div className="row-start-4 col-start-2 cursor-pointer justify-self-center">
          <CameraIconFill color="gray" w={7} />
        </div>
        <div className="row-start-5 col-start-3 cursor-pointer justify-self-center ">
          <CameraIconFill color="red" w={7} />
        </div>
        <div className="row-start-5 col-start-4 cursor-pointer justify-self-center">
          <CameraIconFill color="gray" w={7} />
        </div>
        <div className="row-start-5 col-start-5 cursor-pointer justify-self-center">
          <CameraIconFill color="gray" w={7} />
        </div>
      </div>
      <ModalComponent
        Head={Head}
        
        subHead={subHead}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default LocationMapComponent;
