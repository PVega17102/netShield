import { Image, Pressable, Text, View } from 'react-native';

import { styles } from '../styles/start-styles'

// App entry point or user registration/login
import { initializeUserQuizInfo } from '../quizzes/quizInfo';
import { useNavigation } from '@react-navigation/native';

// Initialize userQuizInfo when the app starts
initializeUserQuizInfo();

const Start = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/netShield.png')}/>
      <Text style={styles.title}>Net Shield</Text>
      <View style={styles.content}>
        <Text style={styles.description}>Tu entrada a la ciberseguridad. Aprende y protege datos con una experiencia flexible para principiantes y profesionales.</Text>
      </View>

      {/* Navigation buttons */}
      <View style={styles.button}>
        <Pressable style={styles.press_1} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>CURSOS</Text>
        </Pressable>
        <Pressable style={styles.press_1} onPress={() => navigation.navigate('ThreatAlerts')}>
          <Text style={styles.text}>ALERTAS</Text>
        </Pressable>
        <Pressable style={styles.press_2} onPress={() => navigation.navigate('ComplaintModule')}>
          <Text style={styles.text}>MÓDULO DE QUEJAS</Text>
        </Pressable>
      </View>
      <Pressable style={styles.press_3} onPress={() => navigation.navigate('About')}>
          <Text style={styles.text_about}>Sobre Net Shield</Text>
      </Pressable>
    </View>
  )
}

export default Start;
