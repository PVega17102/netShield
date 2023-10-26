import React from 'react';
import { View, Text } from 'react-native';

//STYLES
import styles from "../styles/quiz.module.css"

const ResultScreen = ({navigation}) => {
  // Add your result screen content here
    return (
      <View style={styles.container}>
        <Text>Quiz Completed!</Text>
      </View>
    );
}

export default ResultScreen;