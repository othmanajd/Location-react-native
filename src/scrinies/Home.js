import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from "react-native";
import HomeHeader from "../component/HomeHeader";
import { colors } from "../globale/style";
import { Button, Icon } from "react-native-elements";
import { FlatList } from "react-native";
import { categories, restaurantData } from "../Data/Data";
import { Pressable } from "react-native";
import ProduitCard from "../component/Produit"; 
import axios from 'axios';

export default function Home({ navigation }) {
    const [produits, setProduits] = useState([]);
    const screenWidth = Dimensions.get("window").width;
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0");

    useEffect(() => {
        axios.get('http://10.0.2.2:8080/Zou/v1/api/Produits/All')
            .then(response => {
                setProduits(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des produits :', error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <ScrollView stickyHeaderIndices={[0]} showsHorizontalScrollIndicator={true}>
                <View style={{ backgroundColor: colors.grey5, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "center", marginBottom: 5 }}>
                        <TouchableOpacity onPress={() => { setDelivery(true) }}>
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey4 }}>
                                <Text style={styles.deliveryText}>Disponible</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setDelivery(false); navigation.navigate("Map") }}>
                            <View style={{ ...styles.deliveryButton, backgroundColor: (!delivery) ? colors.buttons : colors.grey4 }}>
                                <Text style={styles.deliveryText}>Tous</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.grey5, paddingHorizontal: 7, padding: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: colors.cardbackground, borderRadius: 5 }}>
                        <Icon
                            name="search"
                            style={styles.searchIcon}
                            type="material"
                            color={colors.grey2}
                            iconStyle={{ marginLeft: 5 }}
                            size={32}
                        />
                        <TextInput
                            style={{ width: "67%", paddingVertical: 10, paddingLeft: 5 }}
                            placeholder="Qu'est-ce que vous cherchez ?"
                            autoFocus={false}
                        />
                        <Button title="Recherche" />
                    </View>
                </View>
                <View style={styles.categorieView}>
                    <Icon
                        type="material-community"
                        name="tune"
                        color={colors.grey2}
                        size={35}
                    />
                    <Text style={styles.categorie}>Catégories </Text>
                </View>

                <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({ item, index }) => (
                            <Pressable onPress={() => { setIndexCheck(item.id) }}>
                                <View style={(indexCheck === item.id) ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                                    <Image
                                        style={{ height: 85, width: 85, borderRadius: 40 }}
                                        source={item.image}
                                    />
                                    <View>
                                        <Text style={(indexCheck === item.id) ? { ...styles.smallCardTextSelected } : { ...styles.smallCardText }}>{item.name}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={styles.categorieView}>
                    <Icon
                        type="material-community"
                        name="playlist-plus"
                        color={colors.grey2}
                        size={35}
                    />
                    <Text style={styles.categorie}>Récemment ajouté</Text>
                </View>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, marginBottom: 0 }}
                        horizontal={true}
                        data={produits}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <ProduitCard
                                    onPress={() => console.log("Card pressed")}
                                    nom={item.nom}
                                    discountPercent="39"
                                    numberOfReview={"100"}
                                    businessAddress={item.statu}
                                    farAway={item.dateCreation}
                                    urlImage={item.urlImage}
                                    averageReview={"10"}
                                    screenWidth={screenWidth * 0.8} 
                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.categorieView}>
                    <Icon
                        type="material-community"
                        name="fire"
                        color={colors.grey2}
                        size={35}
                    />
                    <Text style={{ ...styles.categorie, paddingTop: 3 }}>Plus Populaires </Text>
                </View>
                <View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, marginBottom: 0 }}
                        horizontal={true}
                        data={restaurantData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <ProduitCard
                                    onPress={() => console.log("Card pressed")}
                                    nom={item.restaurantName}
                                    deliveryAvailable={item.deliveryAvailable}
                                    discountPercent={item.discountPercent}
                                    numberOfReview={item.numberOfReview}
                                    businessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    urlImage={item.urlImage}
                                    averageReview={item.averageReview}
                                    screenWidth={screenWidth * 0.8} // Adjust screenWidth as per your requirement
                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.categorieView}>
                    <Icon
                        type="material-community"
                        name="view-list"
                        color={colors.grey2}
                        size={35}
                    />
                    <Text style={{ ...styles.categorie, paddingTop: 3 }}>Tous nos produits</Text>
                </View>
                <View style={{ width: screenWidth, paddingTop: 10 }}>
                    {restaurantData.map(item => (
                        <View key={item.id} style={{ paddingBottom: 20 }}>
                            <ProduitCard
                                onPress={() => console.log("Card pressed")}
                                nom={item.restaurantName}
                                deliveryAvailable={item.deliveryAvailable}
                                discountPercent={item.discountPercent}
                                numberOfReview={"90"}
                                businessAddress={item.statu}
                                farAway={item.categorie}
                                urlImage={item.urlImage}
                                averageReview={item.averageReview}
                                screenWidth={screenWidth * 0.8} // Adjust screenWidth as per your requirement
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
            {delivery &&
                <View style={styles.flotinButton}>
                    <TouchableOpacity onPress={() => navigation.navigate("hi")}>
                        <Icon
                            name="card-giftcard"
                            type="material"
                            size={32}
                            color={colors.buttons}
                        />
                        <Text style={{ color: colors.grey2 }}>Cadeau</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,    
    },
    ViwInfo:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:40,
        backgroundColor:colors.cardbackground,
        paddingHorizontal:10,
        borderRadius:5
    },
    deliveryButton:{
        paddingHorizontal:25,
        borderRadius:15,
        paddingVertical:8,
        marginRight:10,
        
    },
    deliveryText:{
        marginLeft:5,
        fontSize:16,
    },
    categorie:{
        color:colors.grey2,
        fontSize:22,
        fontWeight:"bold",
        paddingLeft:10,
    },
    categorieView:{
        backgroundColor:colors.grey5,
        paddingVertical:10,
        paddingBottom:15,
        flexDirection:"row",
        paddingLeft:5,
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        margin:5,
        paddingTop:15,
        width:110,
        height:110,
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        paddingTop:15,
        padding:5,
        margin:10,
        width:110,
        height:110,
    },
    smallCardTextSelected:{
        fontWeight:"bold",
        color:colors.cardbackground,
        paddingBottom:10,
    },
    smallCardText:{
        fontWeight:"bold",
        color:colors.grey2,
        paddingBottom:10,
    },
    flotinButton:{
        position: "absolute",
        bottom: 10,
        right: 15,
        backgroundColor: "white",
        elevation: 10,
        width: 65,
        height: 65,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
    }
    
});
