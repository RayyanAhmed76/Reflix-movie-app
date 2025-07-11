import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="bg-[rgba(0,0,0,.8)] absolute top-0 left-0 flex w-screen h-screen z-[100] items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="hover:text-[#6556CD] absolute right-[3%] top-[5%] text-5xl text-white ri-close-fill text-zinc-500 text-4xl"
      ></Link>
      <ReactPlayer
        height={750}
        width={1500}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />
    </div>
  );
};

export default Trailer;
