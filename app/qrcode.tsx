import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const QrCode = () => {
  return (
    <SafeAreaView
      style={{ paddingTop: Platform.OS === "android" ? 24 : 0 }}
      className="bg-white"
    >
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-8 items-center justify-center flex-1">
          <Image
            source={require("../assets/scan-me.png")}
            className="w-60 h-80"
          />
          <Text className="text-center text-secondaryDark text-sm">
            Demo Weather App - CODE HUB{" "}
          </Text>
        </View>
        <StatusBar style="dark" />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QrCode;
