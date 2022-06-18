import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../Screens/SearchLanding';
import Spring from '../Screens/Spring/Spring';
import GestureHandler from '../Screens/GestureHandler';
import Interpolate from '../Screens/Interpolate';
import InterpolateColor from '../Screens/InterpolateColor';
import PinchGestureHandlerScreen from '../Screens/PinchGestureHandlerScreen';
import TabHandler from '../Screens/TabHandler';
import LayoutAnimation from '../Screens/LayoutAnimation';
import TabViewScreen from '../Screens/TabView';

const SearchStack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchLanding"
        component={Search}
        options={{headerTitle: '애니메이션 튜토리얼'}}
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
      <SearchStack.Screen
        name="InterpolateColor"
        component={InterpolateColor}
        options={{headerTitle: '테마 변환'}}
      />
      <SearchStack.Screen
        name="PinchGestureHandler"
        component={PinchGestureHandlerScreen}
        options={{headerTitle: '보간 사용법'}}
      />
      <SearchStack.Screen
        name="TabHandler"
        component={TabHandler}
        options={{headerTitle: '보간 사용법'}}
      />
      <SearchStack.Screen
        name="LayoutAnimation"
        component={LayoutAnimation}
        options={{headerTitle: '레이아웃 애니메이션'}}
      />
      <SearchStack.Screen
        name="TabView"
        component={TabViewScreen}
        options={{headerTitle: '탭뷰'}}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
