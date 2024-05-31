import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Avatar, Icon, Switch } from "react-native-elements";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { colors } from "../globale/style";
import Nous from "../scrinies/Nous";
import darkColors from "react-native-elements/dist/config/colorsDark";

export default function DrawerProfil(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                    <Avatar
                        rounded
                        size={105}
                        avatarStyle={styles.avatar}
                        source={require("../../assets/Imgs/Me.png")}
                    />
                    <View style={{alignItems:"center"}}>
                        <Text style={styles.name}>Othman arejdal</Text>
                        <Text style={styles.email}>Othmanarejdal@gmail.com</Text>
                        <Text style={styles.email}>0716133931</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
                <View style={{borderTopWidth:1,borderTopColor:colors.grey5,marginTop:10}}>
                    <Text style={styles.prefirence}>Preference</Text>
                    <View style={{...styles.switchText,paddingTop:10,}}>
                        <Text style={styles.modeSombre}>Mode Sombre</Text>
                        <View style={{paddingRight:20, }}>
                            <Switch
                            trackColor={{false:"#767577",true:"#81b0ff"}}
                            thumbColor="#f4f3f4"
                            />
                        </View>
                    </View>
                </View>
                
                
            </DrawerContentScrollView>
            <View style={styles.footer}>
                
                        <Icon
                            type="material-community"
                            name="logout"
                            color={colors.grey2}
                            size={32}
                        />
                    <Text style={styles.footerText}>Deconnexion</Text>
                </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: colors.grey4,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
    },
    avatar: {
        borderWidth: 5,
        borderColor: colors.cardbackground,
    },
    email: {
        marginTop: 5,
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.grey1,
        paddingLeft:5,
        paddingRight:5,
    },
    prefirence:{
        fontSize:20,
        fontWeight:"bold",
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:75,

    },
    name: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.grey1,
        paddingLeft:5,
    },
    footer: {
        alignItems:"center",
        flexDirection:"row",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: colors.grey4,
    },
    footerText: {
        marginLeft:24,
        fontWeight:"bold",
        textAlign: 'center',
        color: colors.grey2,
    },
    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10,
    },
    modeSombre:{
        fontSize:16,
        color:colors.grey2,
        paddingLeft:0,
        fontWeight:"bold"
    }
});
