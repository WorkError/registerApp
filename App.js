import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Main from "./components/Main.js"
import Users from "./components/Users.js"
import Details from "./components/Details.js"



const Stack = createNativeStackNavigator();

function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={Main}  options={{headerShown: false}}/>
              <Stack.Screen name="Users" component={Users}  />
              <Stack.Screen name="Details" component={Details}  />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
