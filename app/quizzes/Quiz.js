//React
import React, { useState, useEffect } from 'react';
import { View, Text , Button } from 'react-native';
import { RadioButton, Snackbar, Card } from 'react-native-paper'; // Import Snackbar from React Native Paper

//Questions
import onlineScamQuestions from '../quizQuestions/onlineScamQuestions';
import updatingQuestions from '../quizQuestions/updatingQuestions';
import phishingQuestions from '../quizQuestions/phishingQuestions';
import cyberAtacksQuestions from '../quizQuestions/cyberattacksQuestions';

//Styles
import styles from "../styles/quiz.module.css"

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const  OnlineScamQuiz = ({ route, navigation }) => {

    const { subjectQuestions } = route.params;

    const [shuffledQuizData, setShuffledQuizData] = useState([]);

    useEffect(() => {
        switch (subjectQuestions) {
        case 'onlineScamQuizQuestions':
            setShuffledQuizData(shuffleArray(onlineScamQuestions));
            break;

        case 'updatingQuestions':
            setShuffledQuizData(shuffleArray(updatingQuestions));
            break;

        
        case 'phishingQuestions':
            setShuffledQuizData(shuffleArray(phishingQuestions));
            break;

        // case 'strongPasswordsQuestions':
        //     setShuffledQuizData(shuffleArray(onlineScamQuestions));
        //     break;

        // case 'personalIdentityQuestions':
        //     setShuffledQuizData(shuffleArray(onlineScamQuestions));
        //     break;

        case 'cyberAtacksQuestions':
            setShuffledQuizData(shuffleArray(cyberAtacksQuestions));
            break;

        default:
            setShuffledQuizData([]); // Set a default value or handle other cases as needed
        }
    }, []);


    const selectedQuestions = shuffledQuizData.slice(0, 5);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userScore, setUserScore] = useState(0);

    const [isCheckButtonDisabled, setCheckButtonDisabled] = useState(true); // Initialize as disabled
    const [hasCheckedCurrentQuestion, setHasCheckedCurrentQuestion] = useState(false);
    const [isCheckButtonVisible, setCheckButtonVisible] = useState(true);
    const [isNextButtonVisible, setNextButtonVisible] = useState(false);

    const [snackbarVisible, setSnackbarVisible] = useState(false); // State to control Snackbar visibility
    const [snackbarMessage, setSnackbarMessage] = useState(''); // State for the Snackbar message

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
            navigation.navigate('Result', {
                userScore,
                totalQuestions: selectedQuestions.length,
            });
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
                <Text>{subjectQuestions}</Text>
                <Card style={styles.card}>

                <Text>Puntuación: {userScore}</Text>
                <Text>{currentQuestion.question}</Text>
                {currentQuestion.options.map((option, optionIndex) => (
                    <View key={optionIndex} style={styles.option}>
                        <RadioButton
                            value={option}
                            style={styles.radio_button}
                            status={selectedAnswer === option ? 'checked' : 'unchecked'}
                            disabled={hasCheckedCurrentQuestion} // Disable radio buttons when the answer has been checked
                            onPress={() => {
                                if (!hasCheckedCurrentQuestion) {
                                    isAnswer(option);
                                }
                            }}
                        />
                        <Text>{option}</Text>
                    </View>
                    ))}


            {isCheckButtonVisible && (
                <Button 
                    mode="contained"
                    onPress={checkAnswer} 
                    title='Check Answer'
                    disabled={isCheckButtonDisabled || hasCheckedCurrentQuestion} />
            )}

            {isNextButtonVisible && (
                <Button 
                    mode="contained" 
                    onPress={nextQuestion} 
                    title='Next Question' />
            )}


            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={2000} // Control how long the Snackbar is visible
                style={styles.answer_status}
            >
                {snackbarMessage}
            </Snackbar>
            </Card>

            </View>
        );
    }
}

export default OnlineScamQuiz;