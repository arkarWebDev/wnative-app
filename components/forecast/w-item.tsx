import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
type WItemProps = {
  weatherCodition: string;
  day: string;
  temp: number;
  wImage: ImageSourcePropType;
};
const WItem = ({ weatherCodition, day, temp, wImage }: WItemProps) => {
  //   const { day, temp, weather } = w;

  return (
    <View className="flex-row items-center flex-1 pb-4 mb-4 border-b border-b-secondaryDark/30">
      <Text className="flex-1 text-xl text-purpleDark font-bold">{day}</Text>
      <View className="flex-1 flex-row gap-2 items-center justify-items-start">
        <Image source={wImage} className="w-10 h-10" />
        <Text className="text-left text-lg font-semibold text-purpleDark">
          {weatherCodition}
        </Text>
      </View>
      <Text className="flex-1 text-right text-2xl font-bold text-purpleDark">
        {temp.toFixed()}°
      </Text>
    </View>
  );
};

export default WItem;
