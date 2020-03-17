import axios from "axios";

export const trend = axios.create({
  baseURL: "https://github-trending-api.now.sh/",
  responseType: "json"
});

export const git = axios.create({
  baseURL: "https://api.github.com/search/",
  responseType: "json"
});
