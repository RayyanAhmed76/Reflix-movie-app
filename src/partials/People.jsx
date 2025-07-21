import Axios from "../utils/Axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import TopNav from "./TopNav";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [people, setpeople] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const [page, setpage] = useState(1);
  document.title = "Reflix | " + category.toUpperCase() + "| PEOPLE";

  const refreshHandler = () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setpage(1);
      setpeople([]);
      sethasmore(true);
      GetPeople();
    }
  };

  const GetPeople = async () => {
    try {
      const { data } = await Axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpeople((prevstate) => [...prevstate, ...data.results]);
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
  return people.length > 0 ? (
    <div className="w-screen h-screen overflow-y-auto ">
      <div className="h-[10vh] px-[2%]   flex items-center justify-between w-full">
        <div className="  flex items-center space-x-2 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-zinc-500 text-4xl"
          ></i>
          <h1 className="text-4xl font-semibold text-zinc-500">
            People <small className="text-sm"> {category.toUpperCase()} </small>
          </h1>
        </div>

        <div className="space-x-2 flex items-center w-[80%] justify-between ">
          <TopNav />
        </div>
      </div>
      <InfiniteScroll
        className="bg-[#121212]"
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={people} title={"person"} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
