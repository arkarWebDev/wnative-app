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
import { useWeatherStore } from "../store/weather-store";

type Location = {
  latitude: number;
  longitude: number;
};

export type Weather = {
  current_weather: {
    temperature: number;
    weathercode: 0;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    time: string[];
    weathercode: number[];
  };
  latitude: number;
  longtitude: number;
};

export default function Index() {
  const setCurrentWeather = useWeatherStore((state) => state.setCurrentWeather);
  const setDailyForecast = useWeatherStore((state) => state.setDailyForecast);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location>({
    longitude: 96.1735,
    latitude: 16.8409,
  });
  const [city, setCity] = useState<string>("Yangon");

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location access.");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    };

    const getWeatherInfo = async () => {
      setLoading(true);
      const weather_api = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
      const response = await fetch(weather_api);
      const response_data: Weather = await response.json();
      setCurrentWeather({
        temperature: response_data.current_weather.temperature,
        weatherCode: response_data.current_weather.weathercode,
      });
      setDailyForecast({
        sunrise: response_data.daily.sunrise,
        sunset: response_data.daily.sunset,
        temperature_2m_max: response_data.daily.temperature_2m_max,
        time: response_data.daily.time,
        weathercode: response_data.daily.weathercode,
      });
      setLoading(false);
    };

    const getReverseGeocode = async () => {
      const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
        latitude: location.latitude,
        longitude: location.longitude,
      });
      setCity(reverseGeocodeResponse[0].city!);
    };

    getPermission();
    getWeatherInfo();
    getReverseGeocode();
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
          {!loading && (
            <>
              <Header cityname={city} />
              <InputBox />
              <Content />
              <Info />
              <Text className="text-center text-secondaryDark text-sm my-8">
                Demo Weather App - CODE HUB{" "}
              </Text>
            </>
          )}
        </View>
        <StatusBar style="dark" />
      </ImageBackground>
    </SafeAreaView>
  );
}
