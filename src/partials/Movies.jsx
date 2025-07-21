import Axios from "../utils/Axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import TopNav from "./TopNav";
import { Dropdown } from "./Dropdown";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1);
  document.title = "Reflix | Movies " + category.toUpperCase();

  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setmovie([]);
      sethasmore(true);
      GetMovie();
    }
  };

  const GetMovie = async () => {
    try {
      const { data } = await Axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prevstate) => [...prevstate, ...data.results]);
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

  return movie.length > 0 ? (
    <div className="w-screen h-screen overflow-y-auto ">
      <div className="h-[10vh] px-[2%]   flex items-center justify-between w-full">
        <div className="  flex items-center space-x-2 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-zinc-500 text-4xl"
          ></i>
          <h1 className="text-4xl font-semibold text-zinc-500">
            Movies <small className="text-sm"> {category.toUpperCase()} </small>
          </h1>
        </div>

        <div className="space-x-2 flex items-center w-[80%] justify-between ">
          <TopNav />
          <Dropdown
            title={"category"}
            options={["upcoming", "top_rated", "popular", "now_playing"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
      </div>
      <InfiniteScroll
        className="bg-[#121212]"
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={movie} title={"movie"} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
