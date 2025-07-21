import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadpeople } from "../store/actions/PeopleActions";
import { removepeople } from "../store/reducers/PeopleSlice";
import Loading from "./Loading";
import HorizontalCards from "../partials/HorizontalCards";
import Reviews from "../partials/Reviews";
import { Dropdown } from "../partials/Dropdown";

const PeopleDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.people);
  const [category, setcategory] = useState("Movie");
  const [category2, setcategory2] = useState("movie");
  useEffect(() => {
    dispatch(asyncloadpeople(id));

    return () => {
      dispatch(removepeople());
    };
  }, [id]);
  console.log(category2);

  console.log(category + "_Credits");
  return info ? (
    <div className="px-[8%] w-screen bg-[#121212] h-min-screen overflow-y-auto">
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center px-[7%] cursor-pointer">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-fill text-zinc-500 text-4xl cursor-pointer"
        ></Link>
      </nav>

      <div className="flex  w-full ">
        <div className="w-[20%] mt-[2%] ">
          <img
            className="max-h-[40vh] min-h-[20vh] mt-[2%] hover:shadow-[9px_5px_10px_4px_rgba(0,0,0,0.1)] ml-8 mb-8"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="border-none h-[3px] bg-zinc-300" />

          <div className="text-white text-2xl flex justify-center gap-8  mt-4">
            <a
              target="_blank"
              href={`https://web.facebook.com/${info.external_id.facebook_id}`}
            >
              <i class="ri-facebook-circle-fill "></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.external_id.instagram_id}`}
            >
              <i class="ri-instagram-line"></i>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/${info.external_id.twitter_id}`}
            >
              <i class="ri-twitter-x-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.external_id.wikidata_id}`}
            >
              <i className="ri-earth-line mr-4"></i>
            </a>
          </div>

          <div className="flex items-center mt-[5%] ">
            <h1 className="text-zinc-300 my-3 text-3xl mt-2 mr-1">
              Known for :
            </h1>
            <h1 className="text-zinc-300 my-3 text-2xl">
              {info.detail.known_for_department}
            </h1>
          </div>

          <div className="flex items-center ">
            <h1 className="text-zinc-300 my-3 text-3xl mt-2 mr-1">Gender : </h1>
            <h1 className="text-zinc-300 my-3 text-2xl">
              {info.detail.gender === 2 ? "Male" : "Female"}
            </h1>
          </div>
          <div className="flex items-center ">
            <h1 className="text-zinc-300 my-3 text-3xl mt-2 mr-1">
              Birthday :{" "}
            </h1>
            <h1 className="text-zinc-300 my-3 text-2xl">
              {info.detail.birthday}
            </h1>
          </div>
          <div className="flex items-center ">
            <h1 className="text-zinc-300 my-3 text-3xl mt-2 mr-1">
              Deathday :
            </h1>
            <h1 className="text-zinc-300 my-3 text-2xl">
              {info.detail.deathday ? info.detail.deathday : "Alive"}
            </h1>
          </div>
        </div>

        <div className="w-[80%]  flex flex-col flex-wrap ml-[3%]">
          <h1 className="text-zinc-300 my-3 text-7xl mt-5 font-semibold whitespace-nowrap">
            {info.detail.name}
          </h1>

          <h1 className="text-3xl text-white flex flex-wrap mt-[3%] ">
            Biography
          </h1>
          <p className="text-zinc-400 my-3 text-xl mt-5 font-semibold ">
            {info.detail.biography}
          </p>
          <h1 className="text-3xl text-white flex flex-wrap mt-[3%] mb-[2%] ">
            Performed Acting in
          </h1>
          <HorizontalCards data={info.Combined_Credits.cast} />
          <div className="w-full flex justify-between items-center mt-[3%]">
            <h1 className="text-3xl font-semibold text-white flex flex-wrap  ">
              Acting
            </h1>
            <Dropdown
              title={"Category"}
              options={["Tv", "Movie"]}
              func={(e) => {
                const value = e.target.value;
                setcategory(value);
                setcategory2(value.toLowerCase());
              }}
            />
          </div>

          <div className=" text-zinc-400 w-full h-[50vh] pb-[5%] mb-[2%] overflow-x-hidden overflow-y-auto mt-5 shadow-lg shadow-[rgba(255,255,255,.5)] border-2 p-5  border-zinc-700">
            {info[category + "_Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white h-[8vh] rounded duration-300  cursor-pointer hover:bg-zinc-600 mb-5"
              >
                <Link to={`/${category2}/details/${c.id}`} className="text-xl">
                  <span>
                    {" "}
                    {c.name || c.original_title || c.title || c.original_name}
                  </span>
                  <span className="block ml-[2%]">
                    {c.character && c.character}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;
