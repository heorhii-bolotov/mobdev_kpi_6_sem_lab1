import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.homeScreen}>
            <Text style={styles.text}>Болотов Георгій</Text>
            <Text style={styles.text}>Група ІВ-81</Text>
            <Text style={styles.text}>ЗК ІВ-8104 (у списку 5)</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.settingsScreen}>
            <Text style={styles.text}>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#fff',
                labelStyle: {
                    fontSize: 12,
                },
                style: {
                    backgroundColor: '#201D1D',
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff'
  },
  homeScreen: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center'
  },
  settingsScreen: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center'
  }
});
