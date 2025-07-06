export { removemovie } from "../reducers/MovieSlice";

import { useDispatch } from "react-redux";
import Axios from "../../utils/Axios";
import { loadmovie } from "../reducers/MovieSlice";

export const asyncloadmovie = (id) => async (disptach, getstate) => {
  try {
    const detail = await Axios.get(`/movie/${id}`);
    const external_id = await Axios.get(`/movie/${id}/external_ids`);
    const recommendations = await Axios.get(`/movie/${id}/recommendations`);
    const reviews = await Axios.get(`/movie/${id}/reviews`);
    const similar = await Axios.get(`/movie/${id}/similar`);
    const videos = await Axios.get(`/movie/${id}/videos`);
    const watchproviders = await Axios.get(`/movie/${id}/watch/providers`);

    const ultimatedetails = {
      detail: detail.data,
      external_id: external_id.data,
      recommendations: recommendations.data.results,
      reviews: reviews.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((n) => n.type === "Trailer"),
      watchproviders:
        watchproviders.data.results.PK || watchproviders.data.results.US,
    };
    disptach(loadmovie(ultimatedetails));

    console.log(ultimatedetails);
  } catch (error) {
    console.log("error " + error);
  }
};
