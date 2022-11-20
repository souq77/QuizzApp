import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'


const HomeScreen = () => {
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
    
        <View>
             <Text style={{ color: "#ffffff", fontSize: 40,  marginTop: 140}}> NOM DU QUIZZ</Text>
        </View>
            <Image
               /* style={{ height: 370, width: "100%", resizeMode: "contain" }}
                source={{
                    uri: "https://images6.alphacoders.com/476/476288.jpg"
                }}*/
            />
           <Text style={{ textAlign: "center", color: "#57D4F6", fontSize: 22, fontWeight: "200" }}>Bienvenue dans notre Quizz</Text>
            <Pressable onPress={() => navigation.navigate('Quizz')} style={{ backgroundColor: "#57D4F6", padding: 14, width:180, borderRadius: 15, marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Text style={{color:"white", fontWeight:"600", textAlign:"center"}}>Commencer la partie</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Rules')} style={{ backgroundColor: "#57D4F6", padding: 14, width:180, borderRadius: 15, marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Text style={{color:"white", fontWeight:"600", textAlign:"center"}}>Règles du jeu</Text>
            </Pressable>

        </LinearGradient>    
    )
}

export default HomeScreen

const styles = StyleSheet.create({})