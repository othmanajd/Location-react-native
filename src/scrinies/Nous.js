import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../component/HomeHeader";

export default function Nous({navigation}){
    return(
        <View style={styles.container}>
            <HomeHeader navigation={navigation}/>
            <Text>Nous</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})