import { StyleSheet, Text, SafeAreaView, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

const ResultScreen = () => {
    const route = useRoute();
    console.log(route.params);
    return (
        <SafeAreaView style={{ margin: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text>Votre resultat</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 14 }}>
                    <Text>Share</Text>
                    <AntDesign style={{ marginLeft: 4 }} name='sharealt' size={18} color="black" />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                <Text>Questions repondus</Text>
                <Text>(30/30)</Text>
            </View>

            <Pressable style={{ backgroundColor: "white", height: 200, borderRadius: 7, marginTop: 20 }}>
                <Text style={{ color: "magenta", fontSize: 15, fontWeight: "500", textAlign: "center", marginTop: 8 }}>Votre score : </Text>
                <FlatList data={route.params.answers} renderItem={({ item, i }) =>
                    <View style={{  }}>
                        <Text>{item.question}</Text>
                        {item.answer !== true ? (
                            <AntDesign style={{}} name='checkcircle' size={20} color="green" />
                        ) : (
                            <AntDesign name='closecircle' size={20} color="red" />
                        )}
                    </View>
                }>

                </FlatList>
            </Pressable>
            <Text style={{ textAlign : "center",marginTop: 30,fontSize: 50, fontWeight: "bold", color: "purple" }}>{route.params.points} Pts</Text>
        </SafeAreaView>
    )
}

export default ResultScreen

const styles = StyleSheet.create({})