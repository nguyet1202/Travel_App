import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTab';
import ALLHotplaces from '../components/Post/Allhotplaces';
import DetailPage from '../screens/HomeTab/detailpage';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tất cả bài review hot"
          component={ALLHotplaces}
        />
        <Stack.Screen
          name="Chi Tiết"
          component={DetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;