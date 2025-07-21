import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Axios from "../utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Cards";
import { Dropdown } from "./Dropdown";
import TopNav from "./TopNav";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1);
  document.title = "Reflix | Blockbuster " + category.toUpperCase();

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      sethasmore(true);
      GetPopular();
    }
  };

  const GetPopular = async () => {
    try {
      const { data } = await Axios.get(`${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setpopular((prevstate) => [...prevstate, ...data.results]);
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
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen overflow-y-auto ">
      <div className="h-[10vh] px-[2%]   flex items-center justify-between w-full">
        <div className="  flex items-center space-x-2 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-zinc-500 text-4xl"
          ></i>
          <h1 className="text-4xl font-semibold text-zinc-500">Blockbuster</h1>
        </div>

        <div className="space-x-2 flex items-center w-[80%] justify-between ">
          <TopNav />
          <Dropdown
            title={"category"}
            options={["tv", "movie"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
      </div>
      <InfiniteScroll
        className="bg-[#121212]"
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
