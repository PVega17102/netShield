//React
import React, { useState } from 'react';
import { View, Text , Button } from 'react-native';
import { RadioButton, Snackbar } from 'react-native-paper'; // Import Snackbar from React Native Paper

//Questions
import onlineScamQuestions from '../quizQuestions/onlineScamQuestions';

//Styles
import styles from "../styles/quiz.module.css"

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledQuizData = shuffleArray(onlineScamQuestions);

const  OnlineScamQuiz = ({ navigation }) => {
    const selectedQuestions = shuffledQuizData.slice(0, 5);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [snackbarVisible, setSnackbarVisible] = useState(false); // State to control Snackbar visibility
    const [snackbarMessage, setSnackbarMessage] = useState(''); // State for the Snackbar message
    const [isCheckButtonDisabled, setCheckButtonDisabled] = useState(true); // Initialize as disabled
    const [hasCheckedCurrentQuestion, setHasCheckedCurrentQuestion] = useState(false);
    const [isCheckButtonVisible, setCheckButtonVisible] = useState(true);
    const [isNextButtonVisible, setNextButtonVisible] = useState(false);

    function isAnswer(option) {
        setSelectedAnswer(option);
        setCheckButtonDisabled(false); // Enable the button when an answer is selected
    }

    function checkAnswer() {
        const currentQuestion = selectedQuestions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correctAnswer) {
            setUserScore(userScore + 1);
            setSnackbarMessage('LE ATINASTEEEE!!!'); 
        } else {
            setSnackbarMessage('No sabia que los ogros lloran :c'); 
        }

        setHasCheckedCurrentQuestion(true); // The user has checked the current question
        setCheckButtonDisabled(true); // Disable the button after checking
        setCheckButtonVisible(false)
        setSnackbarVisible(true);
        setNextButtonVisible(true); 
    }

    function nextQuestion () {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setHasCheckedCurrentQuestion(false); // Reset for the next question


        if (currentQuestionIndex === selectedQuestions.length - 1) {
            navigation.navigate('Result');
        }
        setCheckButtonDisabled(true);
        setCheckButtonVisible(true);
        setNextButtonVisible(false);
    };

      // Check if the quiz is completed before accessing currentQuestion
    if (currentQuestionIndex < selectedQuestions.length) {
        const currentQuestion = selectedQuestions[currentQuestionIndex];

        return (
            <View style={styles.container}>
                <Text>Puntuación: {userScore}</Text>
            <Text>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, optionIndex) => (
                <View key={optionIndex}>
                <RadioButton
                    value={option}
                    status={selectedAnswer === option ? 'checked' : 'unchecked'}
                    onPress={() => isAnswer(option)}
                />
                <Text>{option}</Text>
                </View>
            ))}


            {isCheckButtonVisible && (
                <Button mode="contained"
                    onPress={checkAnswer} 
                    title='Check Answer'
                    disabled={isCheckButtonDisabled || hasCheckedCurrentQuestion} />
            )}

            {isNextButtonVisible && (
                <Button mode="contained" onPress={nextQuestion} title='Next Question' />
            )}


            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={4000} // Control how long the Snackbar is visible
                style={styles.answer_status}
            >
                {snackbarMessage}
            </Snackbar>
            </View>
        );
    }
}

export default OnlineScamQuiz;