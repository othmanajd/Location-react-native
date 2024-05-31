import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../component/HomeHeader";

export default function Map({navigation}){
    return(
        <View style={styles.container}>
            <HomeHeader navigation={navigation}/>
            <Text>Map</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})