import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './Home';
import SearchNavigator from './Search';
import HomeIcon from '../Assets/home.svg';
import SearchIcon from '../Assets/search.svg';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="로티"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <HomeIcon color={color} width={24} height={20} />;
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
      <Tab.Screen
        name="애니메이션"
        component={SearchNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <SearchIcon color={color} width={20} height={20} />;
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
