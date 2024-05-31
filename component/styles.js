import styled from 'styled-components';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444"
};

const StatusBarHeight = Constants.statusBarHeight;

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 0px;
    padding-top: 0px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 100px;
    height: 130px;
`;

export const PageTitle = styled.Text`
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    color: rgb(62,148,196);
    padding: 10px 10px;
`;

export const PageBarreHaut = styled.View`
    background-color: rgb(62,148,196);
    height: 50px;
    padding: 10px;
    border-radius: 5px 5px 0 0; /* Corrected border-radius property */
`;

export const PageBarreBottom = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(62, 148, 196);
    height: 50px;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 10px 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px; /* Corrected margin-vertical property */
    margin-bottom: 5px;
    color: ${tertiary};
`;

export const StyledTextLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: rgb(62, 148, 196);
    justify-content: center;
    align-items:center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${  (props)=>props.google==true && `
    background-color:${green};
    flex-direction:row;
    justify-content: center;
    ` }
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 20px;
    font-weight: bold;
    ${  (props)=>props.google==true && `
    padding:0 10px ;
    ` }
    
`;

export const MsgBox=styled.Text`
text-align:center;
font-size:13px;
`;

export const Line=styled.View`
height:1px;
width:100%;
background-color:${darkLight};
margin-vertical:10px;
`;



export const ExtraView=styled.View`
justify-content:center;
flex-direction:row;
align-items:center;
padding:5px;
`;

export const ExtraText=styled.Text`
justify-content:center;
align-items:center;
color:${tertiary};
font-size:15px;
`;

export const TextLink=styled.TouchableOpacity`
justify-content:center;
align-items:center;
`;

export const TextLinkContent=styled.Text`
color:${brand};
font-size:15px;
`;