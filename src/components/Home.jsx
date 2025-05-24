import React, { useEffect, useState } from "react";
import SideNave from "../partials/SideNave";
import TopNav from "../partials/TopNav";
import Axios from "../utils/Axios";
import Header from "../partials/Header";
import HorizontalCards from "../partials/HorizontalCards";

function Home() {
  document.title = "Reflix | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [Trending, setTrending] = useState(null);

  const Getdataa = async () => {
    try {
      const { data } = await Axios.get(`/trending/all/day`);

      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("error", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await Axios.get(`/trending/all/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    !wallpaper && Getdataa();
    !Trending && GetTrending();
  }, []);
  console.log(Trending);
  return wallpaper && Trending ? (
    <>
      <SideNave />
      <div className=" relative w-[80%] h-full overflow-x-hidden  ">
        <TopNav />
        <Header data={wallpaper} />\
        <HorizontalCards data={Trending} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default Home;
