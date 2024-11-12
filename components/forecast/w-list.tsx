import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import WItem from "./w-item";

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
  {
    day: "San",
    weather: "Sunny",
    temp: "26°",
  },
  {
    day: "Snu",
    weather: "Sunny",
    temp: "26°",
  },
];

const WList = () => {
  const [forecastData, setForecastData] = useState(DummyWeathers);
  return (
    <View className="flex-1">
      <FlatList
        data={forecastData}
        renderItem={({ item }) => <WItem w={item} />}
        keyExtractor={(item) => item.day}
      />
    </View>
  );
};

export default WList;
