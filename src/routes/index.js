import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: '#f12711', shadowColor: 'transparent' },
        headerTintColor: '#fff',
        headerTitleStyle: { alignSelf: 'center' },
        title: 'Center Title',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ title: 'React Native Template' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
