import React from "react";
import { NotificationIcon } from "../../shared/Icons/Notification";
import { UserIcon } from "../../shared/Icons/User";
import img1 from '../../../assets/images/image 1.png'
import img2 from '../../../assets/images/image 2.png'

export const Nav = () => {
  return (
    <div
      className="bg-white p-4 flex justify-between h-14 text-black  shadow-sm font-mono items-center"
      role="navigation"
    >
      <div className="grid grid-flow-col items-center m-10">
          <div className="flex m-8">
        <img src={img1} alt="logo.png" />
        <img src={img2} alt="logo.png"  />
        </div>
        <a href="#" className="pr-8 ">
          Home
        </a>
        <a href="#" className="pr-8">
          Analytics
        </a>
        <a href="#" className="pr-8">
          Live Status
        </a>
        <a href="#" className="pr-8">
          User
        </a>
      </div>
      <div className="grid grid-cols-2 gap-1">
          <NotificationIcon/>
          <UserIcon/>
      </div>
    </div>
  );
};
