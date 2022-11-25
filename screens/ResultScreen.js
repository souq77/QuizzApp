import { StyleSheet, Text, SafeAreaView, View, Pressable, FlatList, Button } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const ResultScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    console.log(route.params);
    return (
       
        <LinearGradient
        // Dégradé de couleur
        colors={['#1C2345', '#3c4780',]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
        style={{
            height: "100%",
        }}>


        <SafeAreaView style={{ margin: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: "#ffffff", fontSize: 20, }}>Votre resultat</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 14 }}>
                    <Text style={{ color: "#ffffff", fontSize: 20 }} >Share</Text>
                    <AntDesign style={{ marginLeft: 4 }} name='sharealt' size={18} color="#ffffff" />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                <Text style={{ color: "#ffffff", fontSize: 20 }}>Questions repondus</Text>
                <Text style={{ color: "#ffffff", fontSize: 20 }}> (30 / 30)</Text>
            </View>

            <Pressable style={{ padding:10, alignItems: "center", marginBottom:20, marginTop:20, backgroundColor: "#3c4780", borderRadius: 6, borderWidth: 3, borderColor: "#57D4F6", height: 300}}>
                <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "500", textAlign: "center", marginTop: 8, marginBottom:12 }}>Votre score : </Text>
                <FlatList style={{ flexDirection: "row" }} data={route.params.answers} renderItem={({ item, i }) =>
                
                    <View style={{ }}>
                        
                        {item.answer !== true ? (
                            <AntDesign style={{}} name='checkcircle' size={20} color="green"> 
                                 <Text style={{ color: "#ffffff" }}>  {item.question}</Text>  
                            </AntDesign>
                        ) : (
                            <AntDesign style={{}} name='closecircle' size={20} color="red" />
                        )}
                    </View>
                }>

                </FlatList>
            </Pressable>
            <Text style={{ textAlign : "center",padding:10, marginBottom:20, backgroundColor: "#3c4780", borderRadius: 6, borderWidth: 3, borderColor: "#57D4F6", marginTop: 30,fontSize: 50, fontWeight: "bold", color: "#ffffff" }}>{route.params.points} Points</Text>
        </SafeAreaView>
        <View style={{ flexDirection: "row" }}>
            <Pressable onPress={() => navigation.navigate('Theme')} style={{ backgroundColor: "#57D4F6", padding:20, width:170, borderRadius: 7, margin:7}}>
            <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "500", textAlign: "center", marginTop: 2 }}>Choisir thème</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Home')} style={{ backgroundColor: "#57D4F6", padding:20, width:170, borderRadius: 7, margin:7}}>
            <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "500", textAlign: "center", marginTop: 2 }}>Retour</Text>
            </Pressable>
        </View>
        
        </LinearGradient>  
    )
}

export default ResultScreen

const styles = StyleSheet.create({})