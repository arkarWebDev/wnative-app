import React from "react";
import { Text, View } from "react-native";
import { Weather } from "./w-list";
import Ionicons from "@expo/vector-icons/Ionicons";
type WItemProps = {
  w: Weather;
};
const WItem = ({ w }: WItemProps) => {
  //   const { day, temp, weather } = w;

  return (
    <View className="flex-row items-center flex-1 pb-4 mb-4 border-b border-b-secondaryDark/30">
      <Text className="flex-1 text-xl text-purpleDark font-bold">{w.day}</Text>
      <View className="flex-1 flex-row gap-2 items-center justify-items-start">
        <Ionicons name="sunny-outline" size={30} color="black" />
        <Text className="text-left text-lg font-semibold text-purpleDark">
          {w.weather}
        </Text>
      </View>
      <Text className="flex-1 text-right text-2xl font-bold text-purpleDark">
        {w.temp}
      </Text>
    </View>
  );
};

export default WItem;
