import { useState,useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../../component/Header';
import { colors, parameters } from '../../globale/style';
import * as Animatibale from  'react-native-animatable' ;
import { Button, Icon ,SocialIcon} from 'react-native-elements';

export default function Login({navigation}) {
const [textInput2Focused,setTextInput2Focused]=useState(false)
const textInput1 = useRef(null);
const textInput2 = useRef(null);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <Header title="Connexion" type="arrow-left"
      navigation={navigation}
       />

      <View style={styles.titlePageView}>
        <Text style={styles.titlePage}>Connection</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <View>
            <TextInput style={styles.textInput1} 
            placeholder='Email' 
            ref={textInput1}/>
        </View>
        <View  style={styles.textInput2}>
            <Animatibale.View animation={textInput2Focused? '':'fadeInRight' } duration={400}>
                <Icon 
                name='lock'
                iconStyle={{color:colors.grrey3}}
                type='material'
                /> 
            </Animatibale.View>
            <View style={styles.verticalBar}></View>
            <TextInput placeholder='Password' 
            style={{width:"80%"}} secureTextEntry={true} 
            ref={textInput2}
            onFocus={ () => {setTextInput2Focused(false)}}
            onBlur={ () =>{setTextInput2Focused(true)} }
            />
            
            <Animatibale.View animation={textInput2Focused? '':'fadeInLeft' } duration={400} >
            <Icon 
                name='visibility-off'
                iconStyle={{color:colors.grrey3}}
                type='material'
                style={{marginLeft:10}}
                />
            </Animatibale.View>
        </View>
      </View>
      <View style={{marginHorizontal:20,marginVertical:20}}>
        <Button
        title="Connextion"
        buttonStyle={parameters.styleButton}
        titleStyle={parameters.buttonTitile}
        onPress={() =>{navigation.navigate("DrawerNvigation")}}
        />
      </View>
      <View style={{alignItems:"center"}}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
            Mot de passe oublié ?
        </Text>
       </View>
       <View style={{alignItems:"center",marginTop:15,}}>
        <Text style={{ fontSize:20,fontWeight:"bold"  }}>
            OR
        </Text>
       </View>
       <View style={{marginHorizontal:10,marginTop:10}}>
        <SocialIcon
        title='Se connnecter avec facebook'
        button
        type='facebook'
        style={styles.SocialIcon}
        onPress={ () =>{} }
        />
       </View>
       <View style={{marginHorizontal:10,marginTop:5}}>
        <SocialIcon
        title='Se connnecter avec google'
        button
        type='google'
        style={styles.SocialIcon}
        onPress={ () =>{} }
        />
       </View>
       <View style={{marginLeft:10,marginTop:10}}>
        <Text style={{ ...styles.text1}}>
            se connnecter comme invite
        </Text>
       </View>
       <View style={{alignItems:"flex-end",marginRight:5}}>
        <Button
        title="cree un compte"
        buttonStyle={styles.CreatButton}
        titleStyle={styles.createButtonTitle}
        />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlePageView: {
    justifyContent: "center",
    alignItems: 'center',
    marginVertical: 20,
  },
  titlePage: {
    color: colors.buttons,
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginHorizontal: 20,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: "#869396",
    borderRadius: 12,
    marginBottom: 20,
    padding: 10,
    paddingLeft:10,
  },
  textInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    borderRadius: 12,
    padding: 10,
    paddingLeft:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  verticalBar: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    margin:5,
  },
  text1: {
    color: "blue",
    fontSize: 16,
  },
  SocialIcon:{
    borderRadius:12,
    height:50,
  },
  CreatButton:{
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgb(62,148,196)",
    height: 40,
    paddingHorizontal: 20,
    marginTop:10,
  },
  createButtonTitle:{
    color: "rgb(62,148,196)",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
