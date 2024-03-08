import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Start from "../screens/Start";
import Home from '../screens/Home';
import Video from '../screens/Video';
import Quiz from "../quizzes/Quiz";
import ResultScreen from '../quizzes/results'; // Your result screen component
import ThreatAlerts from '../screens/ThreatAlerts';
import Infographic from '../screens/Infographic';
import ComplaintModule from '../screens/ComplaintModule';
import CautionScreen from '../screens/CautionScreen';
import About from '../screens/About';

const Stack = createStackNavigator();

//Create navigator to change screens
export const Navigator = () => {
  return (
      <Stack.Navigator initialRouteName='Start' screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Start" component={Start} ></Stack.Screen>
        
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Video" component={Video} />

        <Stack.Screen name="Quiz" component={Quiz} />
          
        <Stack.Screen name="Result" component={ResultScreen} />

        <Stack.Screen name="ThreatAlerts" component={ThreatAlerts} />

        <Stack.Screen name="Infographic" component={Infographic} />

        <Stack.Screen name="ComplaintModule" component={ComplaintModule} />

        <Stack.Screen name="CautionScreen" component={CautionScreen} />

        <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
  )
}