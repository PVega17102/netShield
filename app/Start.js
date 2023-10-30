import { Button, Image, Text, View } from 'react-native';

import styles from './styles/start.module.css'

// App entry point or user registration/login
import { initializeUserQuizInfo } from './quizzes/quizInfo';

// Initialize userQuizInfo when the app starts
initializeUserQuizInfo();

const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./img/netShield.png')}/>
      <Text style={styles.title}>Net Shield</Text>
      <View style={styles.content}>
        <Text style={styles.description}>Tu entrada a la ciberseguridad. Aprende y protege datos con una experiencia flexible para principiantes y profesionales.</Text>
      </View>
      <View style={styles.button}>
        <Button title='COMENZAR' color={'#5D92B0'} onPress={() => navigation.navigate('Home')}/>
        <Button title='QUIZ' color={'#5D92B0'} onPress={() => navigation.navigate('Quiz', {subjectQuestions: 'onlineScamQuizQuestions', subjectName: 'Online Scamming', videoID: 'tnKtD7gZZRAr'})}/>
      </View>
    </View>
  )
}

export default Start
