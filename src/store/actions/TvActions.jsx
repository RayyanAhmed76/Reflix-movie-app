export { removetv } from "../reducers/TvSlice";

import Axios from "../../utils/Axios";
import { loadtv } from "../reducers/TvSlice";

export const asyncloadtv = (id) => async (disptach, getstate) => {
  try {
    const detail = await Axios.get(`/tv/${id}`);
    const external_id = await Axios.get(`/tv/${id}/external_ids`);
    const recommendations = await Axios.get(`/tv/${id}/recommendations`);
    const reviews = await Axios.get(`/tv/${id}/reviews`);
    const similar = await Axios.get(`/tv/${id}/similar`);
    const videos = await Axios.get(`/tv/${id}/videos`);
    const watchproviders = await Axios.get(`/tv/${id}/watch/providers`);

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
    disptach(loadtv(ultimatedetails));

    console.log(ultimatedetails);
  } catch (error) {
    console.log("error " + error);
  }
};
