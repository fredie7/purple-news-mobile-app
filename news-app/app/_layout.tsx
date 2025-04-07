import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import "react-native-reanimated";
import Home from "./screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./navigation/HomeNavigator";

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <HomeNavigator />

      {/* <Home /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 1,
    padding: 20,
  },
});
