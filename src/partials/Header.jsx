import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7),rgba(0,0,0,.9)),url( https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundPosition: "center 1%",
        backgroundSize: "cover",
        filter: "brightness(3)",
        marginTop: "12vh",
      }}
      className=" w-full h-[60vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className=" w-[70%] text-white text-6xl font-semibold ">
        {" "}
        {data.name || data.original_title || data.title || data.original_name}
      </h1>
      <p className="w-[30%] text-white mt-6 ">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400"> more</Link>
      </p>
      <p className="text-white mt-5">
        <i className=" text-yellow-400 ri-megaphone-fill"></i>{" "}
        {!data.release_date ? "coming soon" : data.release_date}
        <i className=" text-yellow-400 ri-album-fill ml-3"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#BB86FC] font-bold  p-4 rounded-md mt-4">
        {" "}
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
