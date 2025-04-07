import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import NewsDetails from "../screens/NewsDetails";

const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="newsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
