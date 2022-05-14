import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/HomeLanding';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Landing"
        component={Home}
        options={{headerTitle: '홈'}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
