import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Events from "../components/Events";
import Event from "../components/Event";

const Stack = createStackNavigator();


export default function EventsRoute() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Events"
            component={Events}
            options={{
                title: "Мероприятия",
                headerStyle: {backgroundColor: "white", height: 0},
            }}
        />
        <Stack.Screen
            name="Event"
            component={Event}
            options={{
                title: "Мероприятие",
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
