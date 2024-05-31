import React, { useState } from "react";
import { StatusBar,View  } from "react-native";
import { Formik } from "formik";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import axios from 'axios';
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
  PageBarreBottom,
  RightIcon,
  Colors,
} from "./../component/styles";
import Hello from "./Hello"; // Import de la page Hello

const { brand, darkLight, primary } = Colors;

// Définir MyTextInput en dehors du composant Login
const MyTextInput = ({ label, icon, hidePassword, setHidePassword, isPassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color="rgb(62,148,196)" />
      </LeftIcon>
      <StyledTextLabel>{label}</StyledTextLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Ajout de l'état isLoggedIn

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('http://10.0.2.2:8080/api/v1/auth/authenticate', {
        "email": values.email,
        "password": values.password
      });

      if (response.data.success) {
        console.log("oui");
        setIsLoggedIn(true); // Définir isLoggedIn sur true si la connexion réussit
      } else {
        console.log("Non");
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  // Afficher la page Hello si isLoggedIn est vrai
  if (isLoggedIn) {
    return <Hello />;
  }

  return (
    <StyledContainer>
      <StatusBar />
      <PageBarreHaut />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require("./../assets/imgs/logo.png")} />
        <PageTitle>Connexion</PageTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="Entrez votre email"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Mot de Pass"
                icon="lock"
                placeholder="Entrez votre mot de pass"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>{message}</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Se connecter</ButtonText>
              </StyledButton>
              <ExtraView>
                <TextLink>
                  <TextLinkContent>Mot de pass oublie?</TextLinkContent>
                </TextLink>
              </ExtraView>
              <Line />
              <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" size={25} color={primary} />
                <ButtonText google={true}>Se connecter avec Google</ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>Vous n'avez pas encore de compte?</ExtraText>
                <TextLink>
                  <TextLinkContent>S´inscrire</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
      <PageBarreBottom />
    </StyledContainer>
  );
};

export default Login;
