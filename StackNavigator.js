import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BiologyScreen from './screens/BiologyScreen'
import ResultsScreen from './screens/ResultScreen'
import RulesScreen from './screens/RulesScreen'
import ThemeScreen from './screens/ThemeScreen'
import CelebrityScreen from './screens/CelebrityScreen'
import GastronomyScreen from './screens/GastronomyScreen'
import SuperHerosScreen from './screens/SuperHerosScreen'


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:true}} />
                <Stack.Screen name='Theme' component={ThemeScreen} options={{headerShown:true}} />
                <Stack.Screen name='Biology' component={BiologyScreen} options={{headerShown:true}} />
                <Stack.Screen name='Celebrity' component={CelebrityScreen} options={{headerShown:true}} />
                <Stack.Screen name='Gastronomy' component={GastronomyScreen} options={{headerShown:true}} />
                <Stack.Screen name='SuperHeros' component={SuperHerosScreen} options={{headerShown:true}} />
                <Stack.Screen name='Results' component={ResultsScreen} options={{headerShown:true}} />
                <Stack.Screen name='Rules' component={RulesScreen} options={{headerShown:true}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})