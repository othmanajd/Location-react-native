import React from "react";
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTbs from "./ClinetTabs";
import { Icon } from "react-native-elements";
import { colors } from "../globale/style";
import Nous from "../scrinies/Nous";
import Payment from "../scrinies/Payment";
import DrawerProfil from "../component/DrowerProfil";
import Promotion from "../scrinies/Promotions";
import Aide from "../scrinies/Aide"

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerProfil {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: colors.buttons,
                drawerInactiveTintColor: colors.grey2,
            }}
        >
            <Drawer.Screen
                name="RootClientTbs"
                component={RootClientTbs}
                options={{
                    title: "Accueil",
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="home"
                            color={focused ? colors.buttons : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Payment"
                component={Payment}
                options={{
                    title: "Payment",
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="credit-card"
                            color={focused ? colors.buttons : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Promotion"
                component={Promotion}
                options={{
                    title: "Promotions",
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="gift-outline"
                            color={focused ? colors.buttons : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Paramètres"
                component={Promotion}
                options={{
                    title: "Paramètres",
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material"
                            name="settings"
                            color={focused ? colors.buttons : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Aide"
                component={Aide}
                options={{
                    title: "Aide",
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material-community"
                            name="help-circle-outline"
                            color={focused ? colors.buttons : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            
            <Drawer.Screen
                name="À Propos de nous"
                component={Nous}
                options={{
                    title: "À Propos de nous",
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            type="material"
                            name="info"
                            color={focused ? colors.buttons : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}
