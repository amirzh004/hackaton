import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Excursions from "../components/Excursions";
import Excursion from "../components/Excursion";

const Stack = createStackNavigator();


export default function ExcursionsRoute() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Excursions"
            component={Excursions}
            options={{
                title: "Достопримечательности",
                headerStyle: {backgroundColor: "white", height: 0},
            }}
        />
        <Stack.Screen
            name="Excursion"
            component={Excursion}
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
