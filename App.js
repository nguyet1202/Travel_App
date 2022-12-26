import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPage from './src/screens/HomeTab/detailpage';
import BottomTabs from './src/navigation/BottomTab';
// import DetailPost from './src/components/Post/posts';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => {
          return {
            animation: 'fade_from_bottom',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Text>Back</Text>
                </TouchableOpacity>
              );
            },
          };
        }}>
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;