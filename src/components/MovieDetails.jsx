import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie } from "../store/actions/MovieActions";
import { removemovie } from "../store/reducers/MovieSlice";
import Loading from "./Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
    };
  }, []);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.3),rgba(0,0,0,.4)),url( https://image.tmdb.org/t/p/w1280/${info.detail.backdrop_path})`,
        backgroundPosition: "center 1%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        marginTop: "6vh",
      }}
      className="w-screen h-screen px-[10px] "
    >
      <nav className="h-[10vh] w-full gap-10 text-zinc-100 flex items-center px-[7%]">
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

      <div className="w-full flex px-[5%]">
        <img
          className="h-[40vh] hover:shadow-[9px_5px_10px_4px_rgba(0,0,0,0.1)]"
          src={`https://image.tmdb.org/t/p/w1280/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
      </div>
      {/*part 2 avaiable providers */}

      <div className="w-[80%] flex px-[5%] mt-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div>
            {info.watchproviders.flatrate ? <h1>Avaiable on </h1> : " "}
            {info.watchproviders.flatrate.map((w, index) => {
              <img
                title={w.provider_name}
                key={index}
                className="w-[5vh] h-[5vh] object-contain rounded-full border border-gray-600 p-1 bg-white"
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=" "
              />;
            })}
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
