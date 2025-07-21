import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import { Dropdown } from "./Dropdown";
import Axios from "../utils/Axios";
import Cards from "./Cards";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1);
  document.title = "Reflix | Trending " + category.toUpperCase();

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      sethasmore(true);
      GetTrending();
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await Axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        settrending((prevstate) => [...prevstate, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen overflow-y-auto ">
      <div className="h-[10vh] px-[2%]   flex items-center justify-between w-full">
        <div className="  flex items-center space-x-2 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-zinc-500 text-4xl cursor-pointer"
          ></i>
          <h1 className="text-4xl font-semibold text-zinc-500">Trending</h1>
        </div>

        <div className="space-x-2 flex items-center w-[80%] justify-between ">
          <TopNav />
          <Dropdown
            title={"category"}
            options={["tv", "movie", "all"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
          <Dropdown
            title={"duration"}
            options={["week", "day"]}
            func={(e) => {
              setduration(e.target.value);
            }}
          />
        </div>
      </div>
      <InfiniteScroll
        className="bg-[#121212]"
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
