import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useWeatherStore } from "../../store/weather-store";
import WItem from "./w-item";
import { DAYS, getWeratherInfoByCode } from "../../utils";

export type Weather = {
  day: string;
  weather: string;
  temp: string;
};

const DummyWeathers: Weather[] = [
  {
    day: "Mon",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Tue",
    weather: "Sunny",
    temp: "26°",
  },
  {
    day: "Wed",
    weather: "Sunny",
    temp: "26°",
  },
  {
    day: "Thu",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Fri",
    weather: "Sunny",
    temp: "26°",
  },
  {
    day: "Sat",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Sun",
    weather: "Sunny",
    temp: "26°",
  },
];

const WList = () => {
  const [forecastData, setForecastData] = useState(DummyWeathers);
  const dailyForecast = useWeatherStore((state) => state.daily);

  return (
    <ScrollView>
      <View className="flex-1">
        {dailyForecast.weathercode.map((code, index) => {
          const temperature = dailyForecast.temperature_2m_max[index];
          const date = new Date(dailyForecast.time[index]);
          const dayOfWeek = DAYS[date.getDay()];
          const condition = getWeratherInfoByCode(code)?.label;
          const img = getWeratherInfoByCode(code)?.image;
          return (
            <WItem
              key={index}
              temp={temperature}
              day={dayOfWeek}
              weatherCodition={condition!}
              wImage={img}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default WList;
