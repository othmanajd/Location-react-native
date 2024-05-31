import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../component/HomeHeader";

export default function Parametre({navigation}){
    return(
        <View style={styles.container}>
            <HomeHeader navigation={navigation}/>
            <Text>Parametre</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})