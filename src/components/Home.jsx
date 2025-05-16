import React from "react";
import SideNave from "../partials/SideNave";
import TopNav from "../partials/TopNav";

function Home() {
  document.title = "Reflix | Homepage";
  return (
    <>
      <SideNave />
      <div className="w-[80%] h-full ">
        <TopNav />
      </div>
    </>
  );
}

export default Home;
