import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'


const RulesScreen = () => {
    const navigation = useNavigation();
    return (

        <LinearGradient
        // Dégradé de couleur
        colors={['#1C2345', '#3c4780',]}
        start={{x: 0, y:0.5}}
        end={{x: 1, y:1}}
        style={styles.background}
        style={{ height: "100%",
        alignItems: 'center' }}>

        <View style={{ padding: 10, marginTop: 100}}>
                <Text style={{ textAlign: "center", color: "#57D4F6", fontSize: 25, fontWeight: "600" }}>REGLES DU JEU</Text>
                
                <View style={{ padding: 10,  marginTop: 15 }}>

                    <View style={{ flexDirection: "row", alignItems: "center", marginVetical: 5, padding:10, marginBottom:20, backgroundColor: "#3c4780", borderRadius: 6, borderWidth: 3, borderColor: "#57D4F6" }}>
                        <Text style={{ marginLeft: 4, color: "#ffffff", fontSize: 18, fontWeight: "500" }}>Pour chaque bonne reponse vous gagnez 5 points</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVetical: 5, paddingBottom:10, paddingTop:10, paddingLeft:10, marginBottom:20, backgroundColor: "#3c4780", borderRadius: 6, borderWidth: 3, borderColor: "#57D4F6"}}>
                        <Text style={{ marginLeft: 4, color: "#ffffff", fontSize: 18, fontWeight: "500" }}>Les mauvaises reponses ne vous penalisent pas</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVetical: 5, paddingBottom:10,  paddingTop:10, paddingLeft:10, marginBottom:20, backgroundColor: "#3c4780", borderRadius: 6, borderWidth: 3, borderColor: "#57D4F6" }}>
                        <Text style={{ marginLeft: 4, color: "#ffffff", fontSize: 18, fontWeight: "500" }}>Vous avez 15s pour repondre a chaque question</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVetical: 5, paddingBottom:10 ,  paddingTop:10, paddingLeft:10, marginBottom:20, backgroundColor: "#3c4780", borderRadius: 6, borderWidth: 3, borderColor: "#57D4F6" }}>
                        <Text style={{ marginLeft: 4, color: "#ffffff", fontSize: 17, fontWeight: "500" }}>Vous devez repondre à toutes les questions</Text>
                    </View> 
                                 
                </View> 
            </View>
            <Pressable onPress={() => navigation.navigate('Home')} style={{ backgroundColor: "#57D4F6", padding: 14, width:180, borderRadius: 15, marginLeft: "auto", marginRight: "auto" }}>
            
                <Text  style={{color:"#ffffff", fontWeight:"600", textAlign:"center"}}>Retour</Text>
            </Pressable>

            </LinearGradient>
    )
}

export default RulesScreen

const styles = StyleSheet.create({})