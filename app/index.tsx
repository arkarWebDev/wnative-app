import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/home/header";
import InputBox from "../components/home/input-box";
import Content from "../components/home/content";
import Info from "../components/home/info";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

type Location = {
  latitude: number;
  longitude: number;
};
export default function Index() {
  const [location, setLocation] = useState<Location>({
    longitude: 96.1735,
    latitude: 16.8409,
  });

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location access.");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      console.log(currentLocation);
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    };

    getPermission();
  }, []);

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
        <View className="px-8">
          <Header />
          <InputBox />
          <Content />
          <Info />
          <Text className="text-center text-secondaryDark text-sm my-8">
            Demo Weather App - CODE HUB{" "}
          </Text>
        </View>
        <StatusBar style="dark" />
      </ImageBackground>
    </SafeAreaView>
  );
}
