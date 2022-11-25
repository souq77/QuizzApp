import { Button, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Localization from 'expo-localization';
import translations from '../data/translation/translations';
import { I18n } from 'i18n-js';



const SettingsScreen = () => {
    // Set the key-value pairs for the different languages you want to support.
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
    }
    const [language, setLanguage] = useState('fr');
    const i18n = new I18n(resources);
    i18n.local='fr';
    useEffect(() => {
        i18n.locale = language;
        console.log(i18n.locale);
    }, [ language]);

    /*const [language, setLanguage] = useState('fr');

    useEffect(() => {
        if (language !== null) {

            i18n.locale = language;
            console.log(language);
        }
    }, [language]);*/

    return (
        <View>
            <Button onPress={() => {
                 alert('version_anglaise');
                 setLanguage('en');
            }}
                title={i18n.t('version_anglaise')} />

            <Button onPress={() => {
                alert('version_francaise');
                setLanguage('fr');
            }}
                title={i18n.t('version_francaise')} />
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})