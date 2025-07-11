import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Reviews = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const reviews = useSelector((state) => state[category].info.reviews);
  console.log("reviewsss");
  return (
    <div>
      {reviews.map((r, i) => (
        <div key={i} className="flex text-white ">
          <h1 className="text-3xl">{r.author}</h1>
          <p className="text-xl">{r.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
