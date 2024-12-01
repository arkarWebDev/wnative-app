import React from "react";
import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Theme } from "../../theme";
import { Weather } from "../../app";
import { getTimeOnly } from "../../utils";

type InfoProps = {
  weatherInfo: Weather;
};

const Info = ({ weatherInfo }: InfoProps) => {
  return (
    <View className="flex-row items-center justify-center my-2 gap-2 mx-auto">
      <View className="flex-1 items-center shadow bg-white rounded-3xl p-4">
        <Feather name="sunrise" size={24} color="black" />
        <Text className="text-purpleDark font-bold text-lg">
          {getTimeOnly(weatherInfo?.daily.sunrise[0])}
        </Text>
        <Text className="text-lg text-secondaryDark font-bold">Sunrise</Text>
      </View>

      <View className="flex-1 items-center shadow bg-white rounded-3xl p-4">
        <Feather name="sunset" size={24} color="black" />
        <Text className="text-purpleDark font-bold text-lg">
          {getTimeOnly(weatherInfo.daily.sunset[0])}
        </Text>
        <Text className="text-lg text-secondaryDark font-bold">Sunset</Text>
      </View>
    </View>
  );
};

export default Info;
