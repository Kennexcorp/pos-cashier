import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;
const headers = {
  "content-type": "application/json",
};
export default axios.create({
  baseURL,
  headers,
});
