import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HomeHeader from "../component/HomeHeader";
import { colors } from "../globale/style";
import { Button } from "react-native-elements";

export default function Profil({ navigation }) {
    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <View style={styles.centeredView}>
                <Image
                    source={require("../../assets/Imgs/1.png")}
                    style={styles.backgroundImage}
                />
                <Image
                    source={require("../../assets/Imgs/Me.png")}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.info} >
                <View style={styles.infoP}>
                    <View style={styles.information}>
                        <Text style={styles.text}>Nom      :</Text>
                        <Text style={styles.text}>OTHMAN AREJDAL</Text>
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.text}>Email  :</Text>
                        <Text style={styles.text}>othmannareejdal@gmail.com</Text>
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.text}>Tele      :</Text>
                        <Text style={styles.text}>0716133931</Text>
                    </View>
                    <View style={{...styles.information,marginBottom:20}}>
                        <Text style={styles.text}>Adress :</Text>
                        <Text style={styles.text}>Rabat</Text>
                    </View>
                    <Button
                    title="Mettre à jour les infos"
                    style={styles.button}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    information:{
        flexDirection:"row",
        marginVertical:10,
    },
    infoP:{
        marginTop:60,
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:colors.grey4,
        borderRadius:10,
        paddingBottom:20,
    },
    container: {
        flex: 1,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        height: 300,
        width: '100%', 
    },
    profileImage: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginTop: -100,
        borderColor: colors.buttons,
        borderWidth: 5,
    },
    info:{
        marginTop:-100,
        backgroundColor:colors.grrey3,
        justifyContent:"center",
        alignItems:"center",
        zIndex:-10,
        height:425,
    },
    text:{
        fontWeight:"bold",
        color:colors.cardbackground,
        fontSize:20,
        paddingHorizontal:10,
    },
    button:{
        backgroundColor:colors.buttons,
    }
});
