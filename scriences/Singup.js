import React ,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons ,Ionicons,Fontisto } from "@expo/vector-icons";
import {
  StyledContainer,
  SubTitle,
  StyledTextInput,
  StyledTextLabel,
  LeftIcon,
  StyledButton,
  ButtonText,
  StyledFormArea,
  InnerContainer,
  PageLogo,
  PageTitle,
  PageBarreHaut,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  MsgBox,
  PageBarreBottom, // Corrigé le nom de la constante
  RightIcon
} from "../component/styles";
import { View, Text } from "react-native"; // Import du composant Text
import { Colors } from "../component/styles";

const { brand, darkLight,primary } = Colors;

// Définir MyTextInput en dehors du composant Login
const MyTextInput = ({ label, icon,hidePassword,setHidePassword , isPassword, ...props }) => {
    return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={30} color="rgb(62,148,196)" />
        </LeftIcon>
        <StyledTextLabel>{label}</StyledTextLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress={()=>setHidePassword(!hidePassword)}  >
                <Ionicons name={hidePassword? 'eye-off':'eye'} size={30} color={darkLight}/>
            </RightIcon>
        )}
      </View>
    );
  };

const Singup = () => {
    const [hidePassword,setHidePassword]=useState(true);
  return (
    <StyledContainer>
      <StatusBar />
      <PageBarreHaut />
      <InnerContainer>
        <PageLogo resizeMode="cover"  source={require("./../assets/imgs/logo.png")} />
        <PageTitle>S'inscrire</PageTitle>
        <Formik
          initialValues={{ email: '', password: '', nom:'' , telephone: '' ,ConfirmPassword: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address" // Changé le label
                icon="mail"
                placeholder="Entrez votre email" // Changé le placeholder
                placeholderTextColor={darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email} // Changé values.email
                keyboardType="email-address"
              />
              <MyTextInput
                label="Nom" // Changé le label
                icon="person"
                placeholder="Entrez votre nom" // Changé le placeholder
                placeholderTextColor={darkLight}
                onChangeText={handleChange("nom")}
                onBlur={handleBlur("nom")}
                value={values.nom} // Changé values.email
                keyboardType="email-address"
              />
              <MyTextInput
                label="Telephone" // Changé le label
                icon="device-mobile"
                placeholder="Entrez votre telephone" // Changé le placeholder
                placeholderTextColor={darkLight}
                onChangeText={handleChange("telephone")}
                onBlur={handleBlur("telephone")}
                value={values.telephone} // Changé values.email
                keyboardType="email-address"
              />
              <MyTextInput
                label="Mot de Pass" // Changé le label
                icon="lock"
                placeholder="Entrez votre mot de pass" // Changé le placeholder
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password} // Changé values.email
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              
              <MyTextInput
                label="Confirmer votre mot de pass" // Changé le label
                icon="lock"
                placeholder="Confirmer votre mot de pass" // Changé le placeholder
                placeholderTextColor={darkLight}
                onChangeText={handleChange("ConfirmPassword")}
                onBlur={handleBlur("ConfirmPassword")}
                value={values.ConfirmPassword} // Changé values.email
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox></MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>S´inscrire</ButtonText>
              </StyledButton>
              <Line/>
              <ExtraView>
                <ExtraText>Avez vous compte?</ExtraText>
                <TextLink>
                    <TextLinkContent> Se connecter</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Singup;
