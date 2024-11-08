import React from "react";
import { Image, Text, View } from "react-native";

const Today = () => {
  return (
    <View className="flex-row mb-2 justify-between">
      <Image source={require("../../assets/storm.png")} className="w-40 h-40" />
      <View>
        <Text className="text-xl font-bold mb-2">Today</Text>
        <Text className="text-9xl font-bold text-purpleDark">26°</Text>
        <Text className="text-xl text-secondaryDark font-bold -mt-3">
          Thunderstorm
        </Text>
      </View>
    </View>
  );
};

export default Today;
