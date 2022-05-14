import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../Screens/SearchLanding';
import Spring from '../Screens/Spring/Spring';
import GestureHandler from '../Screens/GestureHandler';
import Interpolate from '../Screens/Interpolate';

const SearchStack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchLanding"
        component={Search}
        options={{headerTitle: '검색'}}
      />
      <SearchStack.Screen
        name="Spring"
        component={Spring}
        options={{headerTitle: '애니메이션 기초'}}
      />
      <SearchStack.Screen
        name="GestureHandler"
        component={GestureHandler}
        options={{headerTitle: '제스쳐 핸들링'}}
      />
      <SearchStack.Screen
        name="Interpolate"
        component={Interpolate}
        options={{headerTitle: '보간 사용법'}}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
