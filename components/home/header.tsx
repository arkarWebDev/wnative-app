import React from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Theme } from "../../theme";

const Header = () => {
  return (
    <View className="flex-row justify-between items-center mt-6 mb-2">
      <Pressable hitSlop={20}>
        <Link href={"/qrcode"} asChild>
          <Ionicons name="qr-code" size={28} color="black" />
        </Link>
      </Pressable>
      <View className="flex-row items-center">
        <Ionicons name="location" size={28} color={Theme.orange} />
        <Text className="text-2xl font-bold">Yangon</Text>
      </View>
      <Pressable hitSlop={20}>
        <Link href={"/forecast"} asChild>
          <Ionicons name="ellipsis-vertical-sharp" size={24} color="black" />
        </Link>
      </Pressable>
    </View>
  );
};

export default Header;
