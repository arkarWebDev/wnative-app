import { Weather } from "../app";

export const getWeatherInfo = async (latitude: number, longitude: number) => {
  const weather_api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
  const response = await fetch(weather_api);
  const response_data: Weather = await response.json();
  console.log(response_data);

  return response_data;
};

export const getLocationByCity = async (
  city: string
): Promise<{ latitude: number; longitude: number }> => {
  try {
    const API = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const response = await fetch(API);
    const response_data = await response.json();
    const result = response_data.results[0];
    return { latitude: result.latitude, longitude: result.longitude };
  } catch (error) {
    throw "Location not provided";
  }
};
