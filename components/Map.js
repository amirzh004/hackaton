import React, {useRef, useState, useEffect } from 'react';
import { styles } from '../styles/style';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableOpacity, TouchableWithoutFeedback, Platform, ScrollView, Dimensions, TouchableHighlight, Animated } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from "expo-location";
import { SimpleLineIcons } from '@expo/vector-icons';

const INITIAL_REGION = {
    latitude: 51.17,
    longitude: 71.45,
    latitudeDelta: 2,
    longitudeDelta: 2,
};

const markers = [
    {
        latitude: 51.17,
        longitude: 71.45,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    },
    {
        latitude: 51.17399047583879,
        longitude: 71.43729516405435,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    },
    {
        latitude: 51.128497767374704, 
        longitude: 71.43048331054187,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    },
];

export default function Map({ navigation }) {

    const mapRef = useRef();
    const [isMiniViewVisible, setMiniViewVisible] = useState(false);
    const [activeMarker, setActiveMarker] = useState(null);

    const handleMarkerPress = (markerData) => {
        setSightModalVisible(true);
        setActiveMarker(markerData);
        // setMiniViewVisible(true);
        mapRef.current?.animateCamera({center: markerData, zoom: 16}, {duration: 1000});
        setDestination(null);
        setShowPath(false);
    };

    const [destination, setDestination] = useState(null);
    const [isShowPath, setShowPath] = useState(false);
    const [currentLocation, setCurrentLocation] = useState();
    const [isSightModalVisible, setSightModalVisible] = useState(false);

    useEffect(() => {
        const getCurrentLocation = async () => {
            let { coords } = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02
            });
        };
        getCurrentLocation();
    }, []);

    const showPath = () => {
        setShowPath(true);
        setDestination(activeMarker);
        mapRef.current?.animateCamera({center: activeMarker, zoom: 12}, {duration: 1000});
        setSightModalVisible(false);
    };

    const modalY = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        if (isSightModalVisible) {
            // Slide up
            Animated.timing(modalY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        } else {
            // Slide down
            Animated.timing(modalY, {
                toValue: 300,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    }, [isSightModalVisible]);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <MapView 
            style={StyleSheet.absoluteFill} 
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_REGION}
            showsUserLocation
            showsMyLocationButton
            ref={mapRef}
            >
                {markers.map((marker, index) => (
                    <Marker key={index} coordinate={marker} onPress={() => handleMarkerPress(marker)} >
                        <View style={{
                            height: 40, // Specify the size of the circle
                            width: 40, // Specify the size of the circle
                            backgroundColor: 'white', // Set the background color to gray
                            borderRadius: 20, // Half of the width and height to make it a circle
                            borderWidth: 2, // Optional: for a border
                            borderColor: 'white', // Optional: border color
                        }}>
                            <Image style={styles.mini_images} source={{ width: 200, height: 250, uri: "https://astana.citypass.kz/wp-content/uploads/2018/07/atam2-624x405.jpg"}} />
                        </View>
                    </Marker>
                ))}
                { isShowPath && (
                <MapViewDirections
                    origin={currentLocation}
                    destination={destination}
                    apikey={"AIzaSyBf18S7UvQXQgrEoJwHGkbWfJ8g9PW6hlU"}
                    strokeColor="#1257f1"
                    strokeWidth={4}
                />
                )}
            </MapView>
            {/* <ScrollSights /> */}
            {isSightModalVisible && (
                <TouchableWithoutFeedback onPress={() => setSightModalVisible(false)}>
                    <View style={styles.fullScreen}>
                        <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                        <Animated.View style={[styles.modal, {
                            transform: [{ translateY: modalY }]
                        }]}>
                            <View 
                            style={[{ backgroundColor: "white", position: "absolute", bottom: 0, width: "100%", paddingBottom: 25}, isSightModalVisible ? {} : {display: "none"}]}>
                                <View style={{backgroundColor: "white", width: "100%",}}>
                                    <View style={{height: 160, width: 160, top: -80, backgroundColor: "white", alignSelf: "center", borderRadius: 80, alignItems: "center", justifyContent: "center"}}>
                                        <Image style={styles.roundBigImage} source={{ uri: "https://astana.citypass.kz/wp-content/uploads/2018/07/atam2-624x405.jpg"}} />
                                    </View>
                                    <View style={{position: "absolute", marginTop: 80, alignItems: "center", justifyContent: "center", width: "100%"}}>
                                        <Text style={styles.heading}>Baiterek</Text>
                                        <Text style={[{marginHorizontal: 20, marginTop: 10}, styles.description]} numberOfLines={1}>asdalfkndsfsfndkfsl fsdfdflsdfdsj dasdasfdsfdgfdsgndfgkdfgdf gdfsgdsfgdfgdfgdfg gsdgdfgdfgd</Text>
                                    </View>
                                    <View style={{}}>
                                        <View style={styles.inrow}>
                                            <TouchableOpacity onPress={() => showPath()} style={[styles.mapButtons, styles.inrow, {width: "auto", marginBottom: 10, alignItems: "center", backgroundColor: "#31bdfb"}]}>
                                                <SimpleLineIcons name="cursor" size={24} color="white" />
                                                <Text style={{color: "white", fontSize: 20, marginLeft: 8}}>Показать маршрут</Text>
                                            </TouchableOpacity>
                                        </View>
                                        
                                        <View style={[styles.inrow]}>
                                            <TouchableOpacity style={[{}, styles.mapButtons]}>
                                                <Text style={{color: "white", fontSize: 18}}>Посетил</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[{}, styles.mapButtons]} onPress={() => navigation.navigate("Sight")}>
                                                <Text style={{color: "white", fontSize: 18}}>Подробнее</Text>
                                            </TouchableOpacity>
                                        </View>
                                        
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </SafeAreaView>
    );
}