// api key to get location from https://app.ipbase.com/
const API_KEY = "1iTG0XnaQzpwcYFPkiOTHv9aGy3VoaUncYVgETR3";

export const getLocation = async (ip) => {
  try {
    // setting url query params
    const params = new URLSearchParams({
      apikey: API_KEY,
      ip,
    });

    // api call to get lat and lng
    const response = await fetch(`https://api.ipbase.com/v2/info?` + params);

    // destructuring to get location object and converting respone to json
    const {
      data: { location },
    } = await response.json();

    return location;
  } catch (error) {
    console.error(error);
  }
};

export const getSunriseSunset = async (lat, lng) => {
  try {
    // setting url query params
    const params = new URLSearchParams({ lat, lng });

    // api call to get sunrise and sunset times
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?` + params
    );

    // converting respone to json
    const result = await response.json();

    if (result.status === "OK") {
      return result.results;
    }
  } catch (error) {
    console.error(error);
  }
};
