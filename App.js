import Main from "./app/Main";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnlineScamQuiz from "./app/quizzes/onlineScamQuiz";
import ResultScreen from './app/quizzes/results'; // Your result screen component

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Quiz" component={OnlineScamQuiz} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}