import React, { useEffect, useState } from "react";
import SideNave from "../partials/SideNave";
import TopNav from "../partials/TopNav";
import Axios from "../utils/Axios";
import Header from "../partials/Header";
import HorizontalCards from "../partials/HorizontalCards";
import { Dropdown } from "../partials/Dropdown";

function Home() {
  document.title = "Reflix | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [Trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");

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
      const { data } = await Axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && Getdataa();
  }, [category]);
  console.log(Trending);
  return wallpaper && Trending ? (
    <>
      <SideNave />
      <div className=" relative w-[80%] h-full overflow-x-auto   scroll-smooth ">
        <TopNav />
        <Header data={wallpaper} />

        <div className="flex justify-between p-8">
          <h1 className="text-3xl font-bold text-white   ">Trending</h1>

          <Dropdown
            title={"Filter"}
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={Trending} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default Home;
