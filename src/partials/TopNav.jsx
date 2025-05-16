import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center ">
      <i class="text-zinc-200 text-2xl ri-search-line"></i>
      <input
        className="w-[50%] border-none hover:outline-[#BB86FC] hover:outline-2 hover:rounded mx-5 text-zinc-300 text-lg p-2"
        type="text"
        placeholder="Search here..."
      />
      <i class="text-zinc-200 text-2xl ri-close-line"></i>

      <div className="absolute w-[50%] h-[50vh]  top-[90%] bg-[#2C2C2C] overflow-auto  ">
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 flex justify-start text-zinc-600 border-b-2 border-zinc-500">
          <img src="" alt="" />
          <span>Hello world</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 flex justify-start text-zinc-600 border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello world</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 flex justify-start text-zinc-600 border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello world</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 flex justify-start text-zinc-600 border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello world</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 flex justify-start text-zinc-600 border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello world</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 flex justify-start text-zinc-600 border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello world</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 flex justify-start text-zinc-600 border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello world</span>
        </Link>
      </div>
    </div>
  );
}

export default TopNav;
