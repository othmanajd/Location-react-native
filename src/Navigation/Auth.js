import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Welcom from "../scrinies/Auth/Welcom"; 
import Login from "../scrinies/Auth/Login";
import Home from "../scrinies/Home";
import RootClientTbs from "./ClinetTabs";
import Map from "../scrinies/Map";
import DrawerNvigation from "./DrawerNavigator";

const Auth = createStackNavigator();

export default function AuthStackNavigator() { 
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Welcome"
        component={Welcom} 
        options={{ 
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid 
        }}
      />
      <Auth.Screen
        name="Login"
        component={Login} 
        options={{ 
          headerShown: false, 
          ...TransitionPresets.RevealFromBottomAndroid 
        }}
      />
      <Auth.Screen
        name="DrawerNvigation"
        component={DrawerNvigation} 
        options={{ 
          headerShown: false, 
          ...TransitionPresets.RevealFromBottomAndroid 
        }}
      />
      <Auth.Screen
        name="Map"
        component={Map} 
        options={{ 
          headerShown: false, 
          ...TransitionPresets.RevealFromBottomAndroid 
        }}
      />
    </Auth.Navigator>
  );
}
