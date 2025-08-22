import axios from "axios";
import { API_URL, USER_NAME, PASSWORD } from "../lib/constants";

export default function fetchPatientData(callback) {
  axios
    .get(API_URL, {
      headers: {
        Authorization: `Basic ${btoa(`${USER_NAME}:${PASSWORD}`)}`,
      },
    })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => console.error(error));
}
