import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeUserQuizInfo } from './quizInfo';

//STYLES
import styles from "../styles/quiz.module.css"
import { MainScheme } from '../theme/mainTheme';
import {
  MD3LightTheme as DefaulTheme,
  PaperProvider,
  Button,
  Card } from 'react-native-paper'; 
import userQuizInfo from './quizInfo';


const theme = {
  ...DefaulTheme,
  colors: MainScheme
}

const ResultScreen = ({route, navigation}) => {
  const { userScore, totalQuestions, subjectName, subjectQuestions, videoID } = route.params;  
  const percentage = ((userScore / totalQuestions) * 100).toFixed(2);

  const approvedMessage = percentage >= 80.00 ? '¡Aprobado!' : 'No Aprobado';

  const [parsedUserQuizInfo, setParsedUserQuizInfo] = useState(userQuizInfo);


  useEffect(() => {
    // Load userQuizInfo from AsyncStorage
    const loadUserQuizInfo = async () => {
        try {

          if (parsedUserQuizInfo === null) {
            initializeUserQuizInfo();
          }


          const userQuizInfoStorage = await AsyncStorage.getItem('userQuizInfo');
          if (userQuizInfoStorage !== null) {
            // Parse the JSON data
            const parsedUserQuizInfo = JSON.parse(userQuizInfoStorage);

            const statusMap = {
              onlineScamQuizQuestions: 'onlineScamStatus',
              updatingQuestions: 'updatingStatus',
              phishingQuestions: 'phishingStatus',
              strongPasswordsQuestions: 'strongPasswordsStatus',
              personalIdentityQuestions: 'personalIdentityStatus',
              cyberAtacksQuestions: 'cyberAtacksStatus',
            };
            
            const relevantProperty = statusMap[subjectQuestions];
            if (relevantProperty) {
              parsedUserQuizInfo[relevantProperty] = false;
            }

            // Save the updated userQuizInfo back to AsyncStorage
            await AsyncStorage.setItem('userQuizInfo', JSON.stringify(parsedUserQuizInfo));

            setParsedUserQuizInfo(parsedUserQuizInfo);
          }
        } catch (error) {
          console.error('Error updating user quiz info:', error);
      }
    };

    loadUserQuizInfo();
  }, [subjectQuestions, percentage]);



  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
    <Text style={styles.title}>{subjectName}</Text>

      <Card style={styles.card}>
        <Text style={styles.card_title}>Your Quiz Results</Text>
        <Text style={approvedMessage === '¡Aprobado!' ? styles.approved : styles.not_approved}>{approvedMessage}</Text>
        <Text>{JSON.stringify(parsedUserQuizInfo)}</Text>

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
          onPress={() => navigation.push('Home')}>
        Finish Quiz
        </Button>
        : 
        <Button
          title="Retry Course"
          mode='contained'
          theme={{roundness: 1}}
          style={styles.finish_button}
          onPress={() => navigation.push('Video', {subjectQuestions, subjectName, videoID})}>
        Retry Course
        </Button>
        }

    </Card>
  </View>

    </PaperProvider>
    );

}

export default ResultScreen;