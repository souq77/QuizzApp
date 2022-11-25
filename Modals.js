import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

function Popin() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
            }}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
    <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
            }}>
    <View style={{
            margin: 20,
            backgroundColor: "#ffffff",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
         }}>
    <Text style={{
            marginBottom: 15,
            textAlign: "center",
            fontSize: 17,
            }}>Dans ce thème, tous les domaines sont ici parcourus : politique, artistique, médiatique ou sportif. 
    </Text>
            <Pressable
              style={{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: "#57D4F6",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{
                        color: "#ffffff",
                        fontWeight: "bold",
                        textAlign: "center"
                    }}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={{
            borderRadius: 12,
            padding: 10,
            height: 40,
            marginTop: 20,
            backgroundColor: "#57D4F6",
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{
                color: "#ffffff",
                fontWeight: "bold",
                textAlign: "center"
              }}>Information</Text>
      </Pressable>
    </View>
  );
};

export default Popin;

const styles = StyleSheet.create({})