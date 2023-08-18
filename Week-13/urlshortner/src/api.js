import axios from "axios";

const UrlShort = async (url) => {
  console.log("in urlshort");
  // console.log(typeof url)
  const response = await axios.get(
    `https://api.shrtco.de/v2/shorten?url=${url}`,
  );
  // console.log(response.data.result.full_short_link);
  return response;
};

export default UrlShort;
