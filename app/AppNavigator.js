// import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';

// Screens
import Start from "./Start";
import Home from './Home';
import Quiz from "./quizzes/Quiz";
import ResultScreen from './quizzes/results'; // Your result screen component

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" 
      screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Start" >
            {(props) => <Start {...props} />}
        </Stack.Screen>
        
        <Stack.Screen name="Home" >
        {(props) => <Home {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Quiz">
          {(props) => <Quiz {...props}/>}
        </Stack.Screen>

        <Stack.Screen name="Result">
          {(props) => <ResultScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;