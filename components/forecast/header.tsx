import React from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Theme } from "../../theme";

const Header = () => {
  return (
    <View className="flex-row justify-between items-center my-6">
      <Pressable hitSlop={20}>
        <Link href={"/"} asChild>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Link>
      </Pressable>
      <View className="flex-row items-center">
        <Ionicons name="calendar-clear" size={24} color={Theme.purpleDark} />
        <Text className="text-2xl font-bold ms-2">7 days</Text>
      </View>
      <Pressable hitSlop={20}>
        <Link href={"/"} asChild>
          <Ionicons name="qr-code" size={28} color="black" />
        </Link>
      </Pressable>
    </View>
  );
};

export default Header;
