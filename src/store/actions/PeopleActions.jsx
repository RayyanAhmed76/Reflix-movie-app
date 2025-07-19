export { removepeople } from "../reducers/PeopleSlice";

import { useDispatch } from "react-redux";
import Axios from "../../utils/Axios";
import { loadpeople } from "../reducers/PeopleSlice";

export const asyncloadpeople = (id) => async (disptach, getstate) => {
  try {
    const detail = await Axios.get(`/person/${id}`);
    const external_id = await Axios.get(`/person/${id}/external_ids`);
    const Combined_Credits = await Axios.get(`/person/${id}/combined_credits`);
    const Movie_Credits = await Axios.get(`/person/${id}/movie_credits`);
    const Tv_Credits = await Axios.get(`/person/${id}/tv_credits`);

    const ultimatedetails = {
      detail: detail.data,
      external_id: external_id.data,
      Combined_Credits: Combined_Credits.data,
      Movie_Credits: Movie_Credits.data,
      Tv_Credits: Tv_Credits.data,
    };
    disptach(loadpeople(ultimatedetails));

    console.log(ultimatedetails);
  } catch (error) {
    console.log("error " + error);
  }
};
