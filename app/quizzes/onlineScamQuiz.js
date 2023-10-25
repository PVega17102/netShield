//React
import React, { useState } from 'react';
import { View, Text , Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
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
    const [userScore, setUserScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);


    const currentQuestion = selectedQuestions[currentQuestionIndex];


    function checkAnswer() {
        if (selectedAnswer  === currentQuestion.correctAnswer) {
            console.log('LE ATINASTEEEE!!!');
            setUserScore(userScore + 1);
        } else {
            console.log('No sabia que los ogros lloran :c');
        }
    }

    function nextQuestion () {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); // Reset selected answer for the next question


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
                <Button mode="contained" onPress={checkAnswer} title='Check'>Check Answer</Button>
                <Button mode="contained" onPress={nextQuestion} title='Next'>Next Question</Button>
            </View>
        );
    }
}

export default OnlineScamQuiz;