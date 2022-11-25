import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const ThemeScreen = () => {
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
            <Text style={{ color: "#ffffff", fontSize: 40,  marginTop: 70}}>  Choisi ton thème </Text>
        </View>
        <View style={{ flexDirection: "row", alignContent:"space-between", margin:30 }}>
            <View>
                <Pressable onPress={() => navigation.navigate('QuestionsScreen', {theme:'Biology'})} style={{ backgroundColor: "#57D4F6", padding: 40, width:140, borderRadius: 7, margin:15 }}> 
                <Image style={{ width:70, height:70 }}  source={require('../assets/icons/biologique.png')} /> 
                </Pressable>
                <Text style={{color:"white", fontWeight:"600", textAlign:"center"}}>Biologie</Text>
                
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate('QuestionsScreen', {theme:'Celebrity'})} style={{ backgroundColor: "#57D4F6", padding: 40, width:140, borderRadius: 7, margin: 15 }}>
                <Image style={{ width:70, height:70 }}  source={require('../assets/icons/famous.png')} /> 
                </Pressable>
                <Text style={{color:"white", fontWeight:"600", textAlign:"center"}}>Célébrités</Text>
            </View>
    
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
                <Pressable onPress={() => navigation.navigate('QuestionsScreen', {theme:'Gastronomy'})} style={{ backgroundColor: "#57D4F6", padding: 40, width:140, borderRadius: 7, margin: 15 }}>
                <Image style={{ width:70, height:70 }}  source={require('../assets/icons/tray.png')} /> 
                </Pressable>
                <Text style={{color:"white", fontWeight:"600", textAlign:"center"}}>Gastronomie</Text>
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate('QuestionsScreen', {theme:'SuperHeros'})} style={{ backgroundColor: "#57D4F6", padding: 40, width:140, borderRadius: 7, margin: 15}}>
                <Image style={{ width:70, height:70 }}  source={require('../assets/icons/leader.png')} /> 
                </Pressable>
                <Text style={{color:"white", fontWeight:"600", textAlign:"center"}}>Super Héros</Text>
            </View>    
        </View>
           
        </LinearGradient>    
        
    )
}

export default ThemeScreen

const styles = StyleSheet.create({})