import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Error from "../components/Error";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="bg-[rgba(0,0,0,.8)] absolute top-0 left-0 flex w-screen h-screen z-[50] items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="hover:text-[#6556CD] absolute right-[3%] top-[5%] text-5xl text-white ri-close-fill text-zinc-500 text-4xl"
      ></Link>
      {ytvideo ? (
        <ReactPlayer
          controls
          height={800}
          width={1500}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Trailer;
