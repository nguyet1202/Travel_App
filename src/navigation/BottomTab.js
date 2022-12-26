import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/HomeTab';
// import HomeTab from '../screens/HomeTab/hi';
import Search from '../screens/SearchTab';
import Profile from '../screens/ProfileTab';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTab}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Home'}</Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/HomeIcon.png')}
                  style={{width: 20, height: 20}}
                />
              ),
            headerShown: false,
          };
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Search'}
                </Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                source={require('../assets/images/searchIcon.png')}
                style={{width: 20, height: 20, }}
                />
              ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Profile'}
                </Text>
              );
            },
            tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/images/profileIcon.png')}
                  style={{width: 20, height: 20, }}
                />
              ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
    
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
