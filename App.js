import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPage from './src/screens/HomeTab/detailpage';
import BottomTabs from './src/navigation/BottomTab';
import ALLHotplaces from './src/components/Post/Allhotplaces';
// import DetailPost from './src/components/Post/posts';

const Stack = createNativeStackNavigator();

function App() {
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
}
export default App;