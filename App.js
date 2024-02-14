import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './Page/HomePage';
import ElecPage from './Page/ElecPage';
import NewPage from './Page/NewPage';
import History from './Page/History';
import Math from './Page/Math';
import English from './Page/English';
import Science from './Page/Science';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ElecPage" 
          component={ElecPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewPage" 
          component={NewPage}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="Math"
          component={Math}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Science"  
          component={Science}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="History" 
          component={History}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="English" 
          component={English}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
