import React from "react";
import { Link } from "react-router-dom";

function SideNave() {
  return (
    <div className="w-[20%] h-screen  border-r-2 border-zinc-300 p-10">
      <h1 className="text-white text-3xl font-bold ">
        <i class="ri-movie-2-fill text-[#BB86FC] mr-2"></i>
        <span>Reflix</span>
      </h1>
      <nav className=" mt-9 mb-5 flex flex-col text-zinc-300  text-xl gap-5">
        <h1 className="text-white text-lg font-bold mb-2">New Feed</h1>
        <Link
          to={"/trending"}
          className="hover:bg-[#BB86FC] hover:text-white p-5 duration-300 rounded-lg"
        >
          Trending
        </Link>
        <Link
          to={"/popular"}
          className="hover:bg-[#BB86FC] hover:text-white p-5 duration-300 rounded-lg"
        >
          Blockbuster
        </Link>
        <Link
          to={"/movie"}
          className="hover:bg-[#BB86FC] hover:text-white p-5 duration-300 rounded-lg"
        >
          Movies
        </Link>
        <Link
          to={"/tv"}
          className="hover:bg-[#BB86FC] hover:text-white p-5 duration-300 rounded-lg"
        >
          Tv shows
        </Link>
        <Link
          to={"/person"}
          className="hover:bg-[#BB86FC] hover:text-white p-5 duration-300 rounded-lg"
        >
          people
        </Link>
      </nav>

      <hr className="border-white border-[0.5%]" />

      <nav className=" mt-9 mb-5 text-lg flex flex-col text-zinc-300 gap-5">
        <h1 className="text-white  text-lg font-bold mb-2">
          Website Information
        </h1>
        <Link className="hover:bg-[#BB86FC] hover:text-white p-5 duration-300 rounded-lg">
          About Reflix
        </Link>
        <Link
          to={"/ContactUs"}
          className="hover:bg-[#BB86FC] hover:text-white p-5 duration-300 rounded-lg"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default SideNave;
