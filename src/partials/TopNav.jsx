import React from "react";

function TopNav() {
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center ">
      <i class="text-zinc-200 text-2xl ri-search-line"></i>
      <input
        className="w-[50%] border-none  hover:outline-2 hover:rounded mx-5 text-zinc-200 text-lg p-2"
        type="text"
        placeholder="Search here..."
      />
      <i class="text-zinc-200 text-2xl ri-close-line"></i>
    </div>
  );
}

export default TopNav;
