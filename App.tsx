import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigations/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaProvider>
  );
}