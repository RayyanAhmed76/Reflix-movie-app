import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie } from "../store/actions/MovieActions";
import { removemovie } from "../store/reducers/MovieSlice";
import Loading from "./Loading";
import HorizontalCards from "../partials/HorizontalCards";
import Reviews from "../partials/Reviews";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.3),rgba(0,0,0,.4)),url( https://image.tmdb.org/t/p/w1280/${info.detail.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="relative w-full h-min-screen  px-[10px] bg-[#121212] text-white overflow-x-auto overflow-y-auto "
    >
      <nav className="min-h-[10vh] text-2xl w-full gap-10 text-zinc-100 flex items-center px-[7%]">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-fill text-zinc-500 text-4xl cursor-pointer"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.external_id.wikidata_id}`}
        >
          <i className="ri-earth-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.external_id.imdb_id}/`}
        >
          imbd
        </a>
      </nav>
      {/*part 2 poster image */}

      <div className="w-full flex  px-[5%] ">
        <img
          className="max-h-[60vh] min-h-[50vh] mt-[2%] hover:shadow-[9px_5px_10px_4px_rgba(0,0,0,0.1)]"
          src={`https://image.tmdb.org/t/p/w1280/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-white text-7xl  font-semibold whitespace-nowrap">
            {info.detail.name ||
              info.detail.original_title ||
              info.detail.title ||
              info.detail.original_name}
            <span className="text-zinc-200 font-bold text-lg ml-[1%] " text-xl>
              ({info.detail.release_date.split("-")[0]})
            </span>
          </h1>
          <div className="flex items-center gap-x-5 mt-[1%]">
            <span className="   text-white text-semibold text-xl flex  items-center justify-center bg-yellow-500 h-[5vh] w-[5vh] rounded-full">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="text-white text-xl ">{info.detail.release_date}</h1>
          </div>
          <div className="flex items-end text-xl mt-2 ">
            <h1 className="text-zinc-200 mt-1 ">
              {info.detail.genres.map((g, index) => g.name).join(" | ")} |
            </h1>
            <h1 className="text-zinc-300 ">| {info.detail.runtime} min</h1>
          </div>
          <h1 className="mt-3 text-4xl italic text-zinc-300">
            {info.detail.tagline}
          </h1>
          <h1 className="text-4xl mt-10">Overview</h1>
          <p className="text-xl mb-12">{info.detail.overview}</p>
          <Link
            to={`${pathname}/trailer`}
            className="bg-[#6556CD] px-7 py-4 rounded-xl"
          >
            <i className="ri-play-fill mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/*part 2 avaiable providers */}

      <div className="w-[80%]  flex flex-col px-[5%] mb-8 mt-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex mt-5 gap-3 items-center ">
            {info.watchproviders.flatrate ? (
              <h1 className="text-white text-2xl">Avaiable on </h1>
            ) : (
              " "
            )}
            {info.watchproviders.flatrate.map((w) => (
              <img
                title={w.provider_name}
                className="h-[6vh] w-[6vh] object-contain rounded-md "
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders &&
        info.watchproviders.buy &&
        info.watchproviders.rent ? (
          <div>
            {info.watchproviders && info.watchproviders.buy && (
              <div className="flex mt-5 gap-3 items-center ">
                {info.watchproviders.buy ? (
                  <h1 className="text-white text-2xl">Buy on </h1>
                ) : (
                  " "
                )}
                {info.watchproviders.buy.map((w, index) => (
                  <img
                    key={index}
                    title={w.provider_name}
                    className="h-[6vh] w-[6vh] object-contain rounded-md "
                    src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {info.watchproviders && info.watchproviders.buy && (
              <div className="flex mt-5 gap-3 items-center ">
                {info.watchproviders.buy ? (
                  <h1 className="text-white text-2xl">Buy on </h1>
                ) : (
                  " "
                )}
                {info.watchproviders.buy.map((w, index) => (
                  <img
                    key={index}
                    title={w.provider_name}
                    className="h-[6vh] w-[6vh] object-contain rounded-md "
                    src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            )}{" "}
            {info.watchproviders && info.watchproviders.rent && (
              <div className="flex mt-5 gap-3 items-center ">
                {info.watchproviders.rent ? (
                  <h1 className="text-white text-2xl">Rent on </h1>
                ) : (
                  " "
                )}
                {info.watchproviders.rent.map((w, index) => (
                  <img
                    key={index}
                    title={w.provider_name}
                    className="h-[6vh] w-[6vh] object-contain rounded-md "
                    src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/*part 3 recommendation or similarity */}
      <hr className="border-none h-[2px] bg-zinc-400" />

      <h1 className="text-white text-3xl p-5 font-semibold">
        You may also like
      </h1>

      <HorizontalCards
        data={
          info.recommendations.length > 0
            ? info.recommendations
            : info.similarity
        }
      />
      <h1 className="text-5xl text-white mt-7">Reviews</h1>
      <hr />
      <Reviews />

      <Outlet className="text-white" />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
