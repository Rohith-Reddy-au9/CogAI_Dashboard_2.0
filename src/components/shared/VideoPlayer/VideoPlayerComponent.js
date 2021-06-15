import React from "react";
import ReactPlayer from "react-player";
// import Vid1 from "../../../assets/images/20180812_150254.jpg"
const VideoPlayerComponent = () => {
  const src = {
    video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    poster: "../../../assets/images/20180812_150254.jpg",
  };
  return (
    <div className="shawdow-lg grid grid-cols-1/4 gap-5 mb-4">
      <div className="pl-10 ">
          <img src= "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"  className="h-20 w-40 rounded-lg cursor-pointer" alt = ""/>
          <img src= "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"  className="h-20 w-40 rounded-lg my-2 cursor-pointer" alt = "" />
          <img src= "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"  className="h-20 w-40 rounded-lg my-2 cursor-pointer" alt = "" />
          <img src= "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"  className="h-20 w-40 rounded-lg my-2 cursor-pointer" alt = "" />

      </div>
      <ReactPlayer controls={true} url={src.video} style={{borderRadius:"10px"}} />
    </div>
  );
};

export default VideoPlayerComponent;
