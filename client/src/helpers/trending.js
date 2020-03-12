import axios from "axios";

export default axios.create({
  baseURL: "https://github-trending-api.now.sh/",
  responseType: "json"
});
