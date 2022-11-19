import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 15 }}>
            <Image
                style={{ height: 370, width: "100%", resizeMode: "contain" }}
                source={{
                    uri: "https://images6.alphacoders.com/476/476288.jpg"
                }}
            />
            <View style={{ padding: 10 }}>
                <Text style={{ textAlign: "center", color: "magenta", fontSize: 17, fontWeight: "600" }}>REGLES DU JEU</Text>
                <View style={{ padding: 10, backgroundColor: "#F88379", borderRadius: 6, marginTop: 15 }}>

                    <View style={{ flexDirection: "row", alignItems: "center", marginVetical: 5 }}>
                        <Text style={{ color: "white" }}>°</Text>
                        <Text style={{ marginLeft: 4, color: "#722F37", fontSize: 15, fontWeight: "500" }}>Pour chaque bonne reponse vous gagnez 5 points</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVetical: 5 }}>
                        <Text style={{ color: "white" }}>°</Text>
                        <Text style={{ marginLeft: 4, color: "#722F37", fontSize: 15, fontWeight: "500" }}>Les mauvaises reponses ne vous penalisent pas</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVetical: 5 }}>
                        <Text style={{ color: "white" }}>°</Text>
                        <Text style={{ marginLeft: 4, color: "#722F37", fontSize: 15, fontWeight: "500" }}>Vous avez 15s pour repondre a chaque question</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVetical: 5 }}>
                        <Text style={{ color: "white" }}>°</Text>
                        <Text style={{ marginLeft: 4, color: "#722F37", fontSize: 15, fontWeight: "500" }}>Vous devez repondre à toutes les questions</Text>
                    </View>


                </View>
            </View>
            <Pressable onPress={() => navigation.navigate('Quizz')} style={{ backgroundColor: "magenta", padding: 14, width:180, borderRadius: 25, marginLeft: "auto", marginRight: "auto", marginTop: 30 }}>
                <Text style={{color:"white", fontWeight:"600", textAlign:"center"}}>Commencer la partie</Text>
            </Pressable>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})