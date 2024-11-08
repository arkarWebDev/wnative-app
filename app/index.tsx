import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 24 : 0 }}>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-8">
          <Text>Wnative</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
