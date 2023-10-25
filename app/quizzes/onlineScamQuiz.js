//React
import React, { useState } from 'react';
import { View, Text , Button } from 'react-native';
import { RadioButton, Snackbar } from 'react-native-paper'; // Import Snackbar from React Native Paper
import { useNavigation } from '@react-navigation/native';

//Questions
import onlineScamQuestions from '../quizQuestions/onlineScamQuestions';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledQuizData = shuffleArray(onlineScamQuestions);

function OnlineScamQuiz() {
    const navigation = useNavigation();
    const selectedQuestions = shuffledQuizData.slice(0, 5);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [snackbarVisible, setSnackbarVisible] = useState(false); // State to control Snackbar visibility
    const [snackbarMessage, setSnackbarMessage] = useState(''); // State for the Snackbar message


    function checkAnswer() {
        const currentQuestion = selectedQuestions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correctAnswer) {
            setUserScore(userScore + 1);
            setSnackbarMessage('LE ATINASTEEEE!!!'); 
        } else {
            setSnackbarMessage('No sabia que los ogros lloran :c'); 
        }
        setSnackbarVisible(true); 
    }

    function nextQuestion () {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);


        if (currentQuestionIndex === selectedQuestions.length - 1) {
            navigation.navigate('Result'); // ResultScreen
        }
    };

      // Check if the quiz is completed before accessing currentQuestion
    if (currentQuestionIndex < selectedQuestions.length) {
        const currentQuestion = selectedQuestions[currentQuestionIndex];

        return (
            <View>
            <Text>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, optionIndex) => (
                <View key={optionIndex}>
                <RadioButton
                    value={option}
                    status={selectedAnswer === option ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedAnswer(option)}
                />
                <Text>{option}</Text>
                </View>
            ))}

            <Button mode="contained" onPress={checkAnswer} title='Check Answer' />
            <Button mode="contained" onPress={nextQuestion} title='Next' />


            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000} // Control how long the Snackbar is visible
            >
                {snackbarMessage}
            </Snackbar>
            </View>
        );
    }
}

export default OnlineScamQuiz;