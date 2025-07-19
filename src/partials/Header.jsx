import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.3),rgba(0,0,0,.4)),url( https://image.tmdb.org/t/p/w1280/${data.backdrop_path})`,
        backgroundPosition: "center 1%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        marginTop: "6vh",
      }}
      className="w-full h-[60vh] lg:h-[60vh] md:h-[40vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className=" w-[70%] text-white text-6xl font-semibold ">
        {" "}
        {data.name || data.original_title || data.title || data.original_name}
      </h1>
      <p className="w-[30%] text-white mt-6 ">
        {data.overview.slice(0, 300)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          {" "}
          more
        </Link>
      </p>
      <p className="text-white mt-5">
        <i className=" text-yellow-400 ri-megaphone-fill"></i>{" "}
        {!data.release_date ? "coming soon" : data.release_date}
        <i className=" text-yellow-400 ri-album-fill ml-3"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`${data.media_type}/details/${data.id}/trailer`}
        className="bg-[#BB86FC] text-zinc-800 hover:text-zinc-300 font-bold  p-4 rounded-md mt-4"
      >
        {" "}
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
