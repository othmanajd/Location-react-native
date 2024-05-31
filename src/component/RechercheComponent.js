import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, Modal, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { colors } from "../globale/style";
import { Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { filterData} from "../Data/Data" ;
import filter from "lodash/filter";

export default function RechercheComponent() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [textInputFossude, setTextInputFossude] = useState(true);
    const textInput = useRef();
    const [data, setData] = useState([...filterData]);

    const contains = ({ name }, query) => {
        return name.includes(query);
    };

    const handleSearch = (text) => {
        const dataS = filter(filterData, user => contains(user, text));
        setData([...dataS]);
    };

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.SearchArea}>
                    <Icon
                        name="search"
                        style={styles.searchIcon}
                        type="material"
                        iconStyle={{ marginLeft: 5 }}
                        size={32}
                    />
                    <Text style={{ fontSize: 15 }}>Qu'est-ce que vous cherchez ?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal animationType="fade" transparent={false} visible={modalVisible}>
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.textInput}>
                            <Animatable.View animation={textInputFossude ? "slideInLeft" : "slideInRight"} duration={400}>
                                <Icon
                                    name={textInputFossude ? "arrow-back" : "search"}
                                    iconStyle={{ color: colors.grey3 }}
                                    onPress={() => {
                                        if (textInputFossude) setModalVisible(false);
                                        setTextInputFossude(true);
                                    }}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{ width: "90%", paddingVertical: 10, paddingLeft: 5 }}
                                placeholder="Qu'est-ce que vous cherchez ?"
                                autoFocus={false}
                                ref={textInput}
                                onFocus={() => setTextInputFossude(true)}
                                onBlur={() => setTextInputFossude(false)}
                                onChangeText={handleSearch}
                            />
                            <Animatable.View animation={textInputFossude ? "slideInLeft" : "slideInRight"} duration={400}>
                                <Icon
                                    name={textInputFossude ? "cancel" : null}
                                    iconStyle={{ color: colors.grey3 }}
                                    style={{ marginRight: -10 }}
                                    onPress={() => {
                                        textInput.current.clear();
                                        handleSearch('');
                                    }}
                                />
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    Keyboard.dismiss();
                                    navigation.navigate("ProduitCherche", { item: item.name });
                                    setModalVisible(false);
                                    setTextInputFossude(true);
                                }}
                            >
                                <View style={styles.view2}>
                                    <Text style={{ color: colors.grey2, fontSize: 15 }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: colors.grrey3,
        fontSize: 16,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    SearchArea: {
        marginTop: 10,
        width: "94%",
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
        flexDirection: "row",
        alignItems: "center",
    },
    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    view1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    view2: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
    },
    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    modal: {
        flex: 1,
    },
});
