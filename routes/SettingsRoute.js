import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Settings from "../components/Settings";

const Stack = createStackNavigator();


export default function SettingsRoute() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
                title: "Настройки",
                headerStyle: {backgroundColor: "white", height: 0},
            }}
        />
        {/* <Stack.Screen
            name="Sight"
            component={Sight}
            options={{
                title: "Достопримечательность",
                headerStyle: {backgroundColor: "white", height: Platform.OS === "ios" ? 100 : 50,},
                headerBackTitle: null,
                headerBackTitleVisible: false,
                headerTintColor: "black",
                headerTitleStyle: {fontWeight: 500, fontSize: 20},
            }}
        /> */}
  </Stack.Navigator>
  );
}
