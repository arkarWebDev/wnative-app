import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Header from "../components/forecast/header";
import Today from "../components/forecast/today";
import Info from "../components/home/info";
import WList from "../components/forecast/w-list";

const Forecast = () => {
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
        <View className="px-8 flex-1">
          <Header />
          <Today />
          <Info />
          <View className="my-2" />
          <WList />
          <Text className="text-center text-secondaryDark text-sm">
            Demo Weather App - CODE HUB{" "}
          </Text>
        </View>
        <StatusBar style="dark" />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Forecast;
