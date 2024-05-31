import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions } from "react-native";
import HomeHeader from "../component/HomeHeader";
import RechercheComponent from "../component/RechercheComponent";
import { filterData } from "../Data/Data";
import { colors } from "../globale/style";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Recherche({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader navigation={navigation} />
            <RechercheComponent />
            <View style={{ flex: 1}}>
                <FlatList
                    style={{ marginBottom: 1 }}
                    data={filterData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback>
                            <View style={styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source={item.image}
                                >
                                    <View style={styles.textView}>
                                        <Text style={{ color: colors.cardbackground }}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={<Text style={styles.listHeader}>Produits Chercher : </Text>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
        overflow: "hidden",
    },
    image: {
        height: SCREEN_WIDTH * 0.44,
        width: SCREEN_WIDTH * 0.44,
        justifyContent: "flex-end",
    },
    listHeader: {
        fontSize: 20,
        color: colors.grey2,
        paddingBottom: 10,
        marginLeft: 12,
        marginTop: 10,
    },
    textView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        width: "100%",
        paddingVertical: 10,
    },
});
