import axios from "axios";
import { COVERT_TO_COORDINATES } from "../type/types";

// CONVERT ADDRESS TO COORDINATES
export const convertToCoordinates = address => async dispatch => {
  const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`);

  dispatch({ type: COVERT_TO_COORDINATES, payload: response.data });
}