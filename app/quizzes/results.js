import React from 'react';
import { View, Text, Button } from 'react-native';

//STYLES
import styles from "../styles/quiz.module.css"

const ResultScreen = ({route, navigation}) => {
  const { userScore, totalQuestions } = route.params;
  
  const percentage = ((userScore / totalQuestions) * 100).toFixed(2);

  return (
    <View>
      <Text>Your Quiz Results:</Text>
      <Text>Score: {userScore}/{totalQuestions}</Text>
      <Text>Percentage: {percentage}%</Text>

      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
    );

}

export default ResultScreen;