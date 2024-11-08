// Import your global CSS file
import { Stack } from "expo-router";
import "../global.css";

import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="forecast" options={{ headerShown: false }} />
      <Stack.Screen name="qrcode" options={{ title: "React Native Course" }} />
    </Stack>
  );
};

export default Layout;
