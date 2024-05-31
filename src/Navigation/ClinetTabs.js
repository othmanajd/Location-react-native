import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home from "../scrinies/Home";
import Profil from "../scrinies/Profil";
import Caticories from "../scrinies/Caticories"
import Recherche from "../scrinies/Recherche"
import { colors } from "../globale/style"; 

const ClientTbs = createBottomTabNavigator();
 
export default  function RootClientTbs() {
    return (
        <ClientTbs.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.buttons,
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}
        >
            <ClientTbs.Screen 
                name="Accueil"
                component={Home}
                options={{
                    tabBarLabel: "Accueil",
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="home"
                            type="material"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <ClientTbs.Screen 
                name="Recherche"
                component={Recherche}
                options={{
                    tabBarLabel: "Recherche",
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="search"
                            type="material"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <ClientTbs.Screen 
                name="Caticories"
                component={Caticories}
                options={{
                    tabBarLabel: "Caticories",
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="tune"
                            type="material"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <ClientTbs.Screen 
                name="Profil"
                component={Profil}
                options={{
                    tabBarLabel: "Profil",
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="person"
                            type="material"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </ClientTbs.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "center"
    },
});