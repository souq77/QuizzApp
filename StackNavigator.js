import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import QuizzScreen from './screens/QuizzScreen'
import ResultsScreen from './screens/ResultScreen'
import RulesScreen from './screens/RulesScreen'


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:true}} />
                <Stack.Screen name='Quizz' component={QuizzScreen} options={{headerShown:true}} />
                <Stack.Screen name='Results' component={ResultsScreen} options={{headerShown:true}} />
                <Stack.Screen name='Rules' component={RulesScreen} options={{headerShown:true}} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})