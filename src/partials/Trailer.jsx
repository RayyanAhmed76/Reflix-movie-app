import React from "react";
import ReactPlayer from "react-player";

const Trailer = () => {
  console.log("heyyy");
  return (
    <div className="bg-[rgba(0,0,0,.8)] absolute top-0 left-0 flex w-screen h-screen z-[100] items-center justify-center">
      <ReactPlayer></ReactPlayer>
    </div>
  );
};

export default Trailer;
