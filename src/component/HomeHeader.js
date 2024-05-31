import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Icon, withBadge } from 'react-native-elements';
import { colors, parameters } from '../globale/style';

export default function HomeHeader({navigation}) {
    const BadgeIcon = withBadge(0)(Icon);

    return (
        <View style={styles.header}>
            <StatusBar barStyle="light-content" backgroundColor={colors.buttons} />
            <View style={styles.iconContainer}>
                <Icon
                    type="material-community"
                    name="menu"
                    color={colors.cardbackground}
                    size={35}
                    onPress={()=>(
                       navigation.toggleDrawer()
                    )}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>ZOU Louer</Text>
            </View>
            <View style={styles.iconContainer}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={35}
                    color={colors.cardbackground}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },
    titleText: {
        color: colors.cardbackground,
        fontSize: 25,
        fontWeight: "bold",
    },
});
