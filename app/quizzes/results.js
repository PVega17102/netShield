import React, { useState } from 'react';
import { View, Text } from 'react-native';

//STYLES
import styles from "../styles/quiz.module.css"
import { MainScheme } from '../theme/mainTheme';
import {
  MD3LightTheme as DefaulTheme,
  PaperProvider,
  Button,
  Card } from 'react-native-paper'; 


const theme = {
  ...DefaulTheme,
  colors: MainScheme
}

const ResultScreen = ({route, navigation}) => {
  const { userScore, totalQuestions, subjectName, subjectQuestions, videoID } = route.params;  
  const percentage = ((userScore / totalQuestions) * 100).toFixed(2);

  const approvedMessage = percentage >= 80.00 ? '¡Aprobado!' : 'No Aprobado';



  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
    <Text style={styles.title}>{subjectName}</Text>

      <Card style={styles.card}>
        <Text style={styles.card_title}>Your Quiz Results</Text>
        <Text style={approvedMessage === '¡Aprobado!' ? styles.approved : styles.not_approved}>{approvedMessage}</Text>

        <View style={styles.score_info}>
          <Text style={styles.text_info}>Score: {userScore}/{totalQuestions}</Text>
          <Text style={styles.text_info}>Percentage: {percentage}%</Text>
        </View>
        {approvedMessage === '¡Aprobado!' ?
        <Button
          title="Finish Quiz"
          mode='contained'
          theme={{roundness: 1}}
          style={styles.finish_button}
          onPress={() => navigation.push('Start')}>
        Finish Quiz
        </Button>
        : 
        <Button
          title="Retry Course"
          mode='contained'
          theme={{roundness: 1}}
          style={styles.finish_button}
          onPress={() => navigation.push('Video', {subjectQuestions, subjectName, videoID, retry: true})}>
        Retry Course
        </Button>
        }

    </Card>
  </View>

    </PaperProvider>
    );

}

export default ResultScreen;