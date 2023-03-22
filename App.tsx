

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateDB from './src/CreateDB';
import UpdateScreen from './src/Update';
import AddItem from './src/AddItem';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AddItem'>
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="CreateDB" component={CreateDB} />
        <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;