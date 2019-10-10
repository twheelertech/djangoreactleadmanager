import axios from "axios";

import { GET_LEADS, DELETE_LEAD } from "./types";

// GET LEADS
export const getLeads = () => dispatch => {
  try {
    axios.get("/api/leads").then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    });
  } catch (err) {
    console.log(err);
  }
};
// Delete leads
export const deleteLead = id => dispatch => {
  try {
    axios.delete(`/api/leads/${id}/`).then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    });
  } catch (err) {
    console.log(err);
  }
};
