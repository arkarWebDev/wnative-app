import React from "react";
import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { getTimeOnly } from "../../utils";
import { useWeatherStore } from "../../store/weather-store";

const Info = () => {
  const sunrise = useWeatherStore((state) => state.daily).sunrise[0];
  const sunset = useWeatherStore((state) => state.daily).sunset[0];
  return (
    <View className="flex-row items-center justify-center my-2 gap-2 mx-auto">
      <View className="flex-1 items-center shadow bg-white rounded-3xl p-4">
        <Feather name="sunrise" size={24} color="black" />
        <Text className="text-purpleDark font-bold text-lg">
          {getTimeOnly(sunrise)}
        </Text>
        <Text className="text-lg text-secondaryDark font-bold">Sunrise</Text>
      </View>
      <View className="flex-1 items-center shadow bg-white rounded-3xl p-4">
        <Feather name="sunset" size={24} color="black" />
        <Text className="text-purpleDark font-bold text-lg">
          {getTimeOnly(sunset)}
        </Text>
        <Text className="text-lg text-secondaryDark font-bold">Sunset</Text>
      </View>
    </View>
  );
};

export default Info;
