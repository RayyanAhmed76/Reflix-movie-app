import React from "react";

function HorizontalCards({ data: d }) {
  return (
    <div className="w-full h-[45vh]  p-5 ">
      <div>
        <h1 className="text-3xl font-semibold text-white mb-3">Trending</h1>
      </div>
      <div className="w-full h-[40vh]   flex  overflow-y-hidden ">
        {d.map((d, i) => (
          <div key={i} className="min-w-[15%] bg-zinc-800 mr-5 ">
            <img
              className="w-full aspect-[16/9]  object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <h1 className="mt-4 text-white text-2xl font-semibold h-16  ">
              {" "}
              {d.name || d.original_title || d.title || d.original_name}
            </h1>
            <p className="  text-white mt-6 ">
              {d.overview.slice(0, 150)}...
              <span className="text-blue-400"> more</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
