import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../globale/style";
import { Icon } from "react-native-elements";

export default function Header({ title ,type, navigation}) {
    return (
        <View style={styles.header}>
            <View style={styles.iconContainer}>
                <Icon 
                    type="material-community" 
                    name={type}  
                    color={colors.cardbackground}
                    size={28}
                    onPress={() =>{navigation.goBack()} }
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "rgb(62,148,196)",
        height: parameters.headerHeight,
        paddingTop:15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        flex: 1,
    },
    titleContainer: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        color: colors.cardbackground,
        fontSize: 20,
        fontWeight: "bold",
    },
});
