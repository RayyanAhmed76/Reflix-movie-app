import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Reviews = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const reviews = useSelector((state) => state[category].info.reviews);

  return (
    <div className="">
      {reviews.length === 0 ? (
        <div className="flex justify-center ">
          <h1 className="text-5xl font-semibold">reviews not available</h1>
        </div>
      ) : (
        <div className=" h-[40vh] mb-[2%] overflow-y-auto  ">
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col text-zinc-300  ">
              <h1 className="text-3xl mb-5 mt-6 text-white">{r.author}</h1>
              <p className="text-xl">{r.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
