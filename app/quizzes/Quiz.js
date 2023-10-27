//React
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {
        MD3LightTheme as DefaulTheme,
        PaperProvider,
        RadioButton,
        Snackbar,
        Button,
        Card } from 'react-native-paper'; // Import Snackbar from React Native Paper

import { MainScheme } from '../theme/mainTheme';

//Questions
import onlineScamQuestions from '../quizQuestions/onlineScamQuestions';
import updatingQuestions from '../quizQuestions/updatingQuestions';
import phishingQuestions from '../quizQuestions/phishingQuestions';
import cyberAtacksQuestions from '../quizQuestions/cyberAttacksQuestinos';

//Styles
import styles from "../styles/quiz.module.css"

const theme = {
    ...DefaulTheme,
    colors: MainScheme
}

//SUFFLE ARRAY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const  OnlineScamQuiz = ({ route, navigation }) => {

    const { subjectQuestions, subjectName, videoID } = route.params;

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
            setSnackbarMessage('¡Correcto!'); 
        } else {
            setSnackbarMessage('Respuesta erronea :('); 
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
                subjectName,
                videoID,
                subjectQuestions
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
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <Text style={styles.title}>{subjectName}</Text>
                    <Text style={styles.subtitle}>Quiz</Text>
                    <Text style={styles.score}>Puntuación: {userScore}/{selectedQuestions.length}</Text>

                    <Card style={styles.card}>
                    <Text style={styles.question}>{currentQuestion.question}</Text>
                    <View style={styles.options_container}>
                        {currentQuestion.options.map((option, optionIndex) => (
                            <View key={optionIndex} style={styles.single_option}>
                                <RadioButton
                                    value={option}
                                    color='#5D92B0'
                                    
                                    status={selectedAnswer === option ? 'checked' : 'unchecked'}
                                    disabled={hasCheckedCurrentQuestion} // Disable radio buttons when the answer has been checked
                                    onPress={() => {
                                        if (!hasCheckedCurrentQuestion) {
                                            isAnswer(option);
                                        }
                                    }}
                                />
                                <Text style={styles.option_text}>{option}</Text>
                            </View>
                            ))}
                        </View>


                {isCheckButtonVisible && (
                    <Button 
                        mode="contained"
                        onPress={checkAnswer} 
                        title='Check Answer'
                        textColor='#fff'
                        theme={{roundness: 1}}
                        disabled={isCheckButtonDisabled || hasCheckedCurrentQuestion}>Check Answer</Button>
                )}

                {isNextButtonVisible && (
                    <Button 
                        mode="contained" 
                        onPress={nextQuestion}
                        textColor='#fff'
                        theme={{roundness: 1}}
                        title='Next Question'>Next Question</Button>
                )}


                <Snackbar
                    visible={snackbarVisible}
                    onDismiss={() => setSnackbarVisible(false)}
                    duration={1000} // Control how long the Snackbar is visible
                    style={{backgroundColor: snackbarMessage === '¡Correcto!' ? theme.colors.success : theme.colors.error}}
                >
                    {snackbarMessage}
                </Snackbar>
                </Card>

                </View>
            </PaperProvider>
        );
    }
}

export default OnlineScamQuiz;