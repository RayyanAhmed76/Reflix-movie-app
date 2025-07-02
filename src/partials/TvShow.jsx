import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import { Dropdown } from "./Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";
import Axios from "../utils/Axios";
import Cards from "./Cards";

const TvShow = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tvShow, settvShow] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1);
  document.title = "Reflix | Movies " + category.toUpperCase();

  const refreshHandler = () => {
    if (tvShow.length === 0) {
      GetTvShow();
    } else {
      setpage(1);
      settvShow([]);
      sethasmore(true);
      GetTvShow();
    }
  };

  const GetTvShow = async () => {
    try {
      const { data } = await Axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        settvShow((prevstate) => [...prevstate, ...data.results]);
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

  return tvShow.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="h-[10vh] px-[2%]   flex items-center justify-between w-full">
        <div className="  flex items-center space-x-2 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-zinc-500 text-4xl"
          ></i>
          <h1 className="text-4xl font-semibold text-zinc-500">
            TvShows{" "}
            <small className="text-sm"> {category.toUpperCase()} </small>
          </h1>
        </div>

        <div className="space-x-2 flex items-center w-[80%] justify-between ">
          <TopNav />
          <Dropdown
            title={"category"}
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
      </div>
      <InfiniteScroll
        className="bg-[#121212]"
        dataLength={tvShow.length}
        next={GetTvShow}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={tvShow} title={"tv"} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShow;
