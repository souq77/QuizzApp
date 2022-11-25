import { View, StyleSheet, Text, Button, Image } from 'react-native';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
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
const i18n = new I18n(resources);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
// i18n.locale = 'ja';
const Translator = () => {
    return (
        <View style={{  }}>
               <View style={{}}>
                <Button onPress={() => {
                    alert('version_anglaise');
                    setLanguage('fr');
                }}
                    title={i18n.t('version_anglaise')} />

                <Button onPress={() => {
                    alert('version_francaise');
                    setLanguage('en');
                }}
                    title={i18n.t('version_francaise')} />
            </View>
            <Button
                style={{ textAlign:"center",fontSize: 20, color: 'green' }}
                styleDisabled={{ color: 'red' }}
                title="Press Me"
            >
                Press Me
            </Button>

            {/*<Text style={styles.text}>
                {i18n.t('welcome')} {i18n.t('name')}
            </Text>
            <Text>Current locale: {i18n.locale}</Text>
    <Text>Device locale: {Localization.locale}</Text>*/}
        </View>
    );
}

export default Translator

const styles = StyleSheet.create({})