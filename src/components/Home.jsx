import React, { useEffect, useState } from "react";
import SideNave from "../partials/SideNave";
import TopNav from "../partials/TopNav";
import Axios from "../utils/Axios";
import Header from "../partials/Header";

function Home() {
  document.title = "Reflix | Homepage";
  const [wallpaper, setwallpaper] = useState(null);

  const Getdataa = async () => {
    try {
      const { data } = await Axios.get(`/trending/all/day`);
      console.log(data);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    !wallpaper && Getdataa();
  }, []);

  return wallpaper ? (
    <>
      <SideNave />
      <div className=" relative w-[80%] h-full ">
        <TopNav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default Home;
