import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CountDown from 'react-native-countdown-component';


const CountDownTimer = () => {
    const navigation = useNavigation();
 
    return (
    
        <CountDown    
            size={30}
            until={7}
            onFinish={() => navigation.navigate('Home')}
            digitStyle={{backgroundColor: '#57D4F6', borderWidth: 2, borderColor: '#ffffff'}}
            digitTxtStyle={{color: '#ffffff'}}
            timeToShow={['S']}
            timeLabels={{s: null}}
            showSeparator             
            />   
        
    )
}

export default CountDownTimer

const styles = StyleSheet.create({})


