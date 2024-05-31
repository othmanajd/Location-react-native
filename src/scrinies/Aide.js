import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../component/HomeHeader";

export default function Aide({navigation}){
    return(
        <View style={styles.container}>
            <HomeHeader navigation={navigation}/>
            <Text>Aide</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})