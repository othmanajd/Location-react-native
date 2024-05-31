import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../component/HomeHeader";

export default function Promotion({navigation}){
    return(
        <View style={styles.container}>
            <HomeHeader navigation={navigation}/>
            <Text>Promotion</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})