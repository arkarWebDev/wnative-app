import React from "react";
import { Image, Text, View } from "react-native";
import { Weather } from "../../app";

type ContentProps = {
  weatherInfo: Weather;
};
const Content = ({ weatherInfo }: ContentProps) => {
  return (
    <View className="justify-center items-center mb-6">
      <Image source={require("../../assets/storm.png")} className="w-60 h-60" />
      <View className="relative">
        <Text className="text-[12rem] font-extrabold">
          {weatherInfo.current_weather.temperature.toFixed()}
        </Text>
        <Text className="text-8xl absolute top-6 right-[-20]">°</Text>
      </View>
      <Text className="text-4xl font-medium text-secondaryDark">
        Thunderstorm
      </Text>
    </View>
  );
};

export default Content;
