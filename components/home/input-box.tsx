import React from "react";
import { Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Theme } from "../../theme";

type InputBoxProps = {
  serchLocationByCity: (city: string) => void;
};
const InputBox = ({ serchLocationByCity }: InputBoxProps) => {
  return (
    <View className="relative">
      <TextInput
        placeholder="City name"
        className="bg-white shadow rounded-3xl p-4 mb-4 ps-14 placeholder:font-bold placeholder:text-secondaryDark"
        onSubmitEditing={(e) => {
          serchLocationByCity(e.nativeEvent.text);
        }}
      />
      <MaterialCommunityIcons
        name="cloud-search-outline"
        size={24}
        color={Theme.secondaryDark}
        className="absolute top-4 left-4"
      />
    </View>
  );
};

export default InputBox;
