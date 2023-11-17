import { Button, Image, Text, View } from 'react-native';

import styles from './styles/start.module.css'

// App entry point or user registration/login
import { initializeUserQuizInfo } from './quizzes/quizInfo';

// Initialize userQuizInfo when the app starts
initializeUserQuizInfo();

const Infographic = ({ route, navigation }) => {

    const { name } = route.params;

    return (
        <View style={styles.container}>
        <Image style={styles.logo} source={require('./img/netShield.png')}/>
        <Text style={styles.title}>Net Shield</Text>
        <View style={styles.content}>
            <Text>{name}</Text>
        </View>
        </View>
    )
}

export default Infographic
