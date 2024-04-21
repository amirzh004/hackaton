import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Sights from "../components/Sights";
import Sight from "../components/Sight";
import Map from "../components/Map";

const Stack = createStackNavigator();


export default function SightsRoute() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Maps"
            component={Map}
            options={{
                title: "Карта",
                headerStyle: {backgroundColor: "white", height: 0},
            }}
        />
        <Stack.Screen
            name="Sights"
            component={Sights}
            options={{
                title: "Достопримечательности",
                headerStyle: {backgroundColor: "white", height: 0},
            }}
        />
        <Stack.Screen
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
        />
  </Stack.Navigator>
  );
}
