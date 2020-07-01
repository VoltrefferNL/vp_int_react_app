import axios from "axios";
const apiUrl = "https://api.openaq.org/v1/";

export const getWorstAirQuality = async (countryCode) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}measurements?country=${countryCode}&limit=10&order_by=value&sort=desc`
    );
    console.log(data, "ASYNC CALL");
    return data;
  } catch (error) {
    return error;
  }
};

export const getBestAirQuality = async (countryCode) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}measurements?country=${countryCode}&limit=10&order_by=value&sort=asc`
    );

    return data;
  } catch (error) {
    return error;
  }
};

export const getCountrySelectList = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${apiUrl}countries`);
    console.log(results, "Countries");
    return results;
  } catch (error) {
    return error;
  }
};
