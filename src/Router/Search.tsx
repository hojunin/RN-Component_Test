import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../Screens/SearchLanding';

const SearchStack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{headerTitle: '검색'}}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
