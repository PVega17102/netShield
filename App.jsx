import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/presentation/navigator/Navigator';
import { StatusBar } from 'expo-status-bar';

const NetShield = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
      <StatusBar backgroundColor="#5D92B0" style='light'/>
    </>
  );
}

export default NetShield;