import axios from "axios";
const apiUrl = "https://api.openaq.org/v1/";

export const getWorstAirQuality = (countryCode) => {
  return axios
    .get(
      `${apiUrl}measurements?country=${countryCode}&limit=10&order_by=value&sort=desc`
    )
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const getBestAirQuality = (countryCode) => {
  return axios
    .get(
      `${apiUrl}measurements?country=${countryCode}&limit=10&order_by=value&sort=asc`
    )
    .then(({ data }) => {
      return data;
    });
};
