import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncloadmovie } from "../store/actions/MovieActions";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
  }, []);
  return <div></div>;
};

export default MovieDetails;
