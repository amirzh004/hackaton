import React, {useState} from 'react';
import { styles } from '../styles/style';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function ScrollSights() {

    return (
        <View style={styles.mini_container}>
            <ScrollView>
                <Text></Text>
            </ScrollView>
            <ScrollView>
                <View>
                    
                </View>
            </ScrollView>
        </View>
    );
}