import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./Auth";

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <AuthStackNavigator/>
        </NavigationContainer>
    )
}