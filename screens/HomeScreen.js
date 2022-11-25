import { StyleSheet, Text, View, Image, Pressable, Button, Switch } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import translations from '../data/translation/translations';
import { I18n } from 'i18n-js';



const HomeScreen = () => {
    const navigation = useNavigation();
    const resources = {
        en: {
            Commencer_la_partie: 'Start',
            Regles_du_jeu: 'Game rules',
            version_anglaise: 'English version',
            version_francaise: "French version"
        },
        fr: {
            Commencer_la_partie: 'Commencer la partie',
            Regles_du_jeu: 'Règles du jeu',
            version_anglaise: 'Version anglaise',
            version_francaise: 'Version francaise'
        }
    };
    const i18n = new I18n();
    i18n.translations = translations;
    i18n.locale='en';
   
    const [language, setLanguage] = useState('fr');

    useEffect(() => {
        i18n.locale=language;
        console.log(i18n.locale);
    }, [language]);
    return (
        <LinearGradient
            // Dégradé de couleur
            colors={['#1C2345', '#3c4780',]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.background}
            style={{
                height: "100%",
                alignItems: 'center'
            }}>
            <View style={{}}>
                <Button onPress={() => {
                    alert('version_anglaise');
                    setLanguage('en');
                }}
                    title={i18n.translate('version_anglaise')} />

                <Button onPress={() => {
                    alert('version_francaise');
                    setLanguage('fr');
                }}
                    title={i18n.translate('version_francaise')} />
            </View>
        
            <View>
                <Text style={{ color: "#ffffff", fontSize: 40, marginTop: 140 }}> QUIZ APP</Text>
            </View>
            <Image />
            <Text style={{ textAlign: "center", color: "#57D4F6", fontSize: 22, fontWeight: "200", marginBottom: 10 }}>Bienvenue dans notre Quiz</Text>
            <Pressable onPress={() => navigation.navigate('Theme')} style={{ backgroundColor: "#57D4F6", padding: 14, width: 180, borderRadius: 15, marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Text style={{ color: "white", fontWeight: "600", textAlign: "center" }}>{i18n.t('Commencer_la_partie')}</Text>
            </Pressable>
        
            <Pressable onPress={() => navigation.navigate('Rules')} style={{ backgroundColor: "#57D4F6", padding: 14, width: 180, borderRadius: 15, marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Text style={{ color: "white", fontWeight: "600", textAlign: "center" }}>{i18n.t('Regles_du_jeu')}</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Setting')} style={{ backgroundColor: "#57D4F6", padding: 14, width: 180, borderRadius: 15, marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Text style={{ color: "white", fontWeight: "600", textAlign: "center" }}>{i18n.t('Regles_du_jeu')}</Text>
            </Pressable>        

        </LinearGradient>

    )
}

export default HomeScreen

const styles = StyleSheet.create({})