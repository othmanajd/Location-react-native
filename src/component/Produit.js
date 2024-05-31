import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import { colors, parameters } from "../globale/style";

export default function ProduitCard({
  onPress,
  nom,
  deliveryAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  urlImage,
  screenWidth
}) {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.cardview, width: screenWidth}}>
      <View style={{...styles.cardview, width: screenWidth}}>
        <Image  
          style={{...styles.image, width: screenWidth}}
          source={{ uri: urlImage }}
        />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.nom}>{nom}</Text>
        </View>
        <View style={styles.row}>
          <View style={{...styles.icone,alignItems:"center"}}>
            <Icon
              name="clock"
              type="material-community"
              color={colors.grey2}
              size={18}
              iconStyle={{}}
            />
            <Text style={styles.duree}>{farAway}</Text>
          </View>
          <View style={{flexDirection: "row" }}>
            <Text style={styles.adress}>{businessAddress}</Text>
          </View>
        </View>
      </View>
      <View style={styles.review}>
        <Text style={styles.vue}>{averageReview}</Text>
        <Text>{numberOfReview} vues</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardview: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom:10,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 200
  },
  content: {
    padding: 10
  },
  nom: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.grey1,
    marginTop: 5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  icone: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1
  },
  duree: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
    color: colors.grey2,
  },
  adress: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10
  },
  review: {
    position: "absolute",
    top: 0,
    right: 10,
    backgroundColor: "rgba(94, 105, 119, 0.5)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12
  },
  vue: {
    color: colors.cardbackground,
    fontSize: 20,
    fontWeight: "bold",
  }
});
