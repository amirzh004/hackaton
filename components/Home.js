import { Tab, TabView } from '@rneui/themed';
import React, { useState } from 'react';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableWithoutFeedback, Image, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import { styles } from '../styles/style';
 
export default function Home({ navigation }) {
    const [userInput, setUserInput] = useState("");
    const [generatedText, setGeneratedText] = useState("");
    const [index, setIndex] = useState(0);
 
    const generateText = () => {
        setGeneratedText(userInput);
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };
 
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={{borderRadius: 20}}>
                <Image
                    source={require('../assets/robot2.jpg')}
                    style={[styles.image, { alignSelf: "center", marginVertical: 20, width: 150, height: 150, borderRadius: 75}]}
                />
            </View>
 
            <Tab
                value={index}
                onChange={setIndex}
                indicatorStyle={{
                    height: 0,
                }}
                variant="default"
                style={{ borderWidth: 2, borderColor: "#283484", borderRadius: 10, marginHorizontal: 20, }}
            >
                <Tab.Item
                    title="Текстовой ввод"
                    titleStyle={[index === 0 ? { color: 'white' } : { color: '#283484' }, { fontSize: 13, fontWeight: "500", alignSelf: "center" }]}
                    buttonStyle={[index === 0 ? { backgroundColor: '#283484' } :  { borderRadius: 10, padding: 0 }]}
                />
                <Tab.Item
                    title="Аудио ввод"
                    titleStyle={[index === 1 ? { color: 'white' } : { color: '#283484' }, { fontSize: 13, fontWeight: "500" }]}
                    buttonStyle={[index === 1 ? { backgroundColor: '#283484' } :  { borderRadius: 10, padding: 0 }]}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} containerStyle={{height: "100%", marginVertical: 15}}>
                <TabView.Item style={{ width: "100%", height: "100%"  }}>
                    <View style={{ paddingHorizontal: 20, height: "100%" }}>
                            <ScrollView style={{height: "100%"}}>
                                <View scrollEnabled={true} style={{ height:'100%'}}>
                                    <View style={{backgroundColor: "#7183af", minWidth: "30%", maxWidth: "85%", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, marginBottom: 10,}}>
                                        {/* Bot text */}
                                        <Text style={{color: "white"}}>Здравствуйте, чем я могу вам помочь?</Text>
                                    </View>
                                    <View style={{backgroundColor: "#31bdfb", color: "white", minWidth: 0, maxWidth: "85%",paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, marginBottom: 10, marginLeft:"auto"}}>
                                        {/* Human text */}
                                        <Text style={{color: "white",}}>После посещения галереи, которая заканчивается в 5 часов вечера, вы можете совершить прогулку по близлежащим достопримечательностям, которые доступны для вечернего посещения. Например:\n\n1. Бульвар \"Нуржол\" - прекрасное место для вечерней прогулки с видом на современные здания и архитектурные символы столицы.\n\n2. Назарбаев центр - c 10:00 до 18:00, здесь вы можете познакомиться с информацией о деятельности Первого Президента РК и исследовать экспозиции центра.\n\n3. ТРЦ «Хан Шатыр» - после культурных мероприятий можно посетить этот торгово-развлекательный центр, где доступны различные магазины, рестораны и развлечения.\n\n4. Монумент \"Байтерек\" - рабочие часы до 21:00, высотная башня с обзорной площадкой, откуда открывается великолепный вид на город. \n\nЭти места позволят вам приятно и с пользой провести вечер после посещения галереи.</Text>
                                    </View>
                                </View>
                                
                            </ScrollView>
                            <View style={{marginTop: 10}}>
                                <View style={[{alignItems: 'center', justifyContent: "flex-start", marginBottom: 12}, styles.inrow]}>
                                    <TextInput
                                    style={styles.input}
                                    placeholder="Enter your text"
                                    onChangeText={text => setUserInput(text)}
                                    value={userInput}
                                    numberOfLines={1}
                                    />
                                    <TouchableOpacity onPress={generateText} style={{backgroundColor: "#223681", padding: 5, borderRadius: 5}}>
                                        <MaterialCommunityIcons name="send" size={28} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>
                    <ScrollView style={[styles.scrollContainer, { height: "100%" }]}>
                        <View style={{ marginVertical: 10 }}>
                            <TouchableWithoutFeedback>
                                <View style={[styles.card, { padding: 0, paddingHorizontal: 20, paddingTop: 15, paddingBottom: 10, flexDirection: "row", alignItems: "center", marginBottom: 10 }]}>
                                    <View style={{ flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center" }}>
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../assets/voice.jpg')}
                                                style={[styles.image, { width: 100, height: 100, opacity: 5, borderColor: 'black', borderRadius: 3  }]}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.optionsButton, { flexDirection: "row", gap: 10, padding: 0 }]}>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </ScrollView>
                </TabView.Item>
            </TabView>
        </SafeAreaView>
    );
}