import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

function TopNav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const Getsearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data);
      setsearches(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    Getsearch();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center  ">
      <i className="text-zinc-200 text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] h-[4vh] border-none hover:outline-[#BB86FC] hover:outline-2 hover:rounded mx-10  text-zinc-300 text-xl p-5"
        type="text"
        placeholder="Search here..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-200 text-2xl ri-close-line"
        ></i>
      )}

      <div className=" z-[100]  absolute w-[50%] max-h-[50vh] left-[25%] top-[100%]  bg-[#2C2C2C] overflow-y-auto rounded ">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 flex justify-start text-zinc-400 border-b-2 border-zinc-500"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover mr-5 rounded shadow-lg"
              src={
                s.backdrop_path || s.profile_path || s.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path || s.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span className="flex justify-center items-center">
              {s.name || s.original_title || s.title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
