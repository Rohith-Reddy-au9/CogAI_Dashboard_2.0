import React from "react";
import ReactPlayer from "react-player";
import Vid1 from "../../../assets/images/20180812_150254.jpg"
const VideoPlayerComponent = () => {
  const src = {
    video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    poster: "../../../assets/images/20180812_150254.jpg",
  };
  return (
    <div className="shawdow-lg grid grid-cols-1/4 gap-5 mb-4">
      <div className="pl-10 ">
          <img src={Vid1}  className="h-20 w-40 rounded-lg cursor-pointer"/>
          <img src={Vid1}  className="h-20 w-40 rounded-lg my-2 cursor-pointer"/>
          <img src={Vid1}  className="h-20 w-40 rounded-lg my-2 cursor-pointer"/>
          <img src={Vid1}  className="h-20 w-40 rounded-lg my-2 cursor-pointer"/>

      </div>
      <ReactPlayer controls={true} url={src.video} style={{borderRadius:"10px"}} />
    </div>
  );
};

export default VideoPlayerComponent;
