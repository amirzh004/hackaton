import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from 'react-native';
import Home from './components/Home';
import SightsRoute from './routes/SightsRoute';
import ExcursionsRoute from './routes/ExcursionsRoute';
import EventsRoute from './routes/EventsRoute';
import SettingsRoute from './routes/SettingsRoute';
import { House, Ticket } from './icons/Logos';
import { Feather, FontAwesome, Fontisto } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <Tab.Navigator screenOptions={{ 
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: "#223681",
                tabBarInactiveBackgroundColor: "#223681",
                tabBarStyle: {
                    backgroundColor: '#223681',
                    paddingBottom: 'env(safe-area-inset-bottom)',
                    paddingTop: 0,
                    paddingBottom: 15,
                    zIndex: 9999,
                }
            }}>
                <Tab.Screen 
                    name="SightsRoute" 
                    component={SightsRoute} 
                    options={{ 
                        tabBarIcon: ({ focused }) => (<Feather name="map" size={24} color={focused ? "aqua" : "white"} />)
                    }} 
                />
                <Tab.Screen 
                    name="ExcursionsRoute" 
                    component={ExcursionsRoute} 
                    options={{ 
                        tabBarIcon: ({ focused }) => (<Ticket color={focused ? "aqua" : "white"} />)
                    }} 
                />
                <Tab.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ 
                        tabBarIcon: ({ focused }) => {
                            return(
                                <View style={{top: -20, width: 74, height: 74, borderRadius: 37, alignItems: "center", alignSelf: "center", justifyContent: "center", backgroundColor: "white"}}>
                                    <View style={{backgroundColor: "#223681", width: 60, height: 60, borderRadius: 30, alignItems: "center", justifyContent: "center",}}>
                                        <Fontisto name="atom" size={32} color={focused ? "aqua" : "white"} />
                                    </View>
                                </View>
                            )
                        }
                    }} 
                />
                <Tab.Screen 
                    name="EventsRoute" 
                    component={EventsRoute} 
                    options={{ 
                        tabBarIcon: ({ focused }) => (<FontAwesome name="calendar" size={24} color={focused ? "aqua" : "white"} />)
                    }} 
                />
                <Tab.Screen 
                    name="SettingsRoute" 
                    component={SettingsRoute} 
                    options={{ 
                        tabBarLabel: "",
                        tabBarIcon: ({ focused }) => (<Feather name="menu" size={28} color={focused ? "aqua" : "white"} />)
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
