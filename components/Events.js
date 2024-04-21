import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ScrollView } from 'react-native'; // Update import
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/style';
 
export default function Events({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
 
                <ScrollView>
                    {/* Label */}
                    <Text style={styles.label}>Предстоящие мероприятия</Text>
                    {/* Scroll by X */}
                    <ScrollView horizontal style={styles.scrollByXView} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        {/* Event containers */}
                        <View style={styles.eventContainer} >
                            {/* Image for the event */}
                            <View style={styles.eventsImage}>
                                
                            </View>
                            {/* Icon and text for date */}
                            <View style={styles.iconText}>
                                <AntDesign name="calendar" size={24} color="black" />
                                <Text>Date</Text>
                            </View>
                            {/* Icon and text for place */}
                            <View style={styles.iconText}>
                                <MaterialIcons name="place" size={24} color="black" />
                                <Text>Place</Text>
                            </View>
                            {/* Icon and text for price */}
                            <View style={styles.iconText}>
                                <MaterialIcons name="attach-money" size={24} color="black" />
                                <Text>Price</Text> 
                            </View>
                        </View>
                        <View style={styles.eventContainer} >
                            {/* Image for the event */}
                            <View style={styles.eventsImage}></View>
                            {/* Icon and text for date */}
                            <View style={styles.iconText}>
                                <AntDesign name="calendar" size={24} color="black" />
                                <Text>Date</Text>
                            </View>
                            {/* Icon and text for place */}
                            <View style={styles.iconText}>
                                <MaterialIcons name="place" size={24} color="black" />
                                <Text>Place</Text>
                            </View>
                            {/* Icon and text for price */}
                            <View style={styles.iconText}>
                                <MaterialIcons name="attach-money" size={24} color="black" />
                                <Text>Price</Text> 
                            </View>
                        </View>
                        <View style={styles.eventContainer} >
                            {/* Image for the event */}
                            <View style={styles.eventsImage}></View>
                            {/* Icon and text for date */}
                            <View style={styles.iconText}>
                                <AntDesign name="calendar" size={24} color="black" />
                                <Text>Date</Text>
                            </View>
                            {/* Icon and text for place */}
                            <View style={styles.iconText}>
                                <MaterialIcons name="place" size={24} color="black" />
                                <Text>Place</Text>
                            </View>
                            {/* Icon and text for price */}
                            <View style={styles.iconText}>
                                <MaterialIcons name="attach-money" size={24} color="black" />
                                <Text>Price</Text> 
                            </View>
                        </View>
                        <View style={styles.eventContainer} >
                            {/* Image for the event */}
                            <View style={styles.eventsImage}></View>
                            {/* Icon and text for date */}
                            <View style={styles.iconText}>
                                <AntDesign name="calendar" size={24} color="black" />
                                <Text>Date</Text>
                            </View>
                            {/* Icon and text for place */}
                            <View style={styles.iconText}>
                                <MaterialIcons name="place" size={24} color="black" />
                                <Text>Place</Text>
                            </View>
                            {/* Icon and text for price */}
                            <View style={styles.iconText}>
                                <MaterialIcons name="attach-money" size={24} color="black" />
                                <Text>Price</Text> 
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
 
        </SafeAreaView>
    );
}
