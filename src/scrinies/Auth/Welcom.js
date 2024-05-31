import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../../component/Header';
import { colors, parameters } from '../../globale/style';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Swiper from 'react-native-swiper';
import { Button, Icon ,SocialIcon} from 'react-native-elements';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <View style={styles.mainView}>
        <Image
          resizeMode="cover"
          source={require("../../../assets/Imgs/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>BIENVENUE CHEZ ZOU</Text>
        <Text style={styles.paragraph}>
          Bienvenue chez ZOU. Nous sommes dédiés à vous offrir des services de qualité supérieure pour répondre à tous vos besoins. Explorez notre gamme complète de services et découvrez comment nous pouvons vous aider à atteindre vos objectifs. Votre satisfaction est notre priorité.
        </Text>
        </View>
        <View style={{flex:4,justifyContent:"center",marginHorizontal:5}}>
            <Swiper autoplay={true}>
                <View style={styles.slide1}>
                    <Image
                    source={require("../../../assets/Imgs/Me.png")}
                    style={{height:"100%",width:"100%"}}
                    />
                </View>
                <View style={styles.slide2}>
                    <Image
                    source={require("../../../assets/Imgs/1.png")}
                    style={{height:"100%",width:"100%"}}
                    />
                </View>
                <View style={styles.slide1}>
                    <Image
                    source={require("../../../assets/Imgs/Me.png")}
                    style={{height:"100%",width:"100%"}}
                    />
                </View>
                <View style={styles.slide1}>
                    <Image
                    source={require("../../../assets/Imgs/2.png")}
                    style={{height:"100%",width:"100%"}}
                    />
                </View>
            </Swiper>
        </View>
        <View  style={{justifyContent:"flex-end",marginHorizontal:20,marginVertical:10}}>
        <Button
        title="Se connecter"
        buttonStyle={parameters.styleButton}
        titleStyle={parameters.buttonTitile}
        onPress={ () =>{
            navigation.navigate("Login")
        } }
        />
        </View>
        <View style={{marginHorizontal:20,marginBottom:10}} >
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
  mainView: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
  },
  logo: {
    marginTop:getStatusBarHeight(),
    width: 90,
    height: 100,
    marginBottom: 5,
  },
  title: {
    fontSize: 26,
    color: "rgb(62,148,196)",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 13,
    color: "#002a53",
    textAlign: "center",
    marginTop: 0,
    marginHorizontal:5,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#9006EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#928809',
  },
  CreatButton:{
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgb(62,148,196)",
    height: 50,
    paddingHorizontal:20,
  },
  createButtonTitle:{
    color: colors.grey1,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  }
});
