import AsyncStorage from '@react-native-async-storage/async-storage';


//Function to get or set user attempts
export const getQuizAttempts = async (subjectQuestions) => {
    try {
    const quizAttemptsKey = `quizAttempts_${subjectQuestions}`;
    const quizAttempts = await AsyncStorage.getItem(quizAttemptsKey);

    if (quizAttempts !== null) {
        return parseInt(quizAttempts);
    } else {
        return 0; // Return 0 if there are no attempts recorded
    }
    } catch (error) {
    console.error('Error getting quiz attempts:', error);
    return 0; // Return 0 in case of an error
    }
};


//Increment quizz attemps number
export const incrementQuizAttempts = async (subjectQuestionsAttempt) => {
        try {
        const quizAttemptsKey = `quizAttempts_${subjectQuestionsAttempt}`;
        const quizAttempts = await AsyncStorage.getItem(quizAttemptsKey);
    
        //If the user has no attempts is set to 0 or increments the attempts
        if (quizAttempts === null) {
            quizAttempts = 0;
        } else {
            quizAttempts = parseInt(quizAttempts) + 1;
        }
    
        await AsyncStorage.setItem(quizAttemptsKey, quizAttempts.toString());
        } catch (error) {
        console.error('Error incrementing quiz attempts:', error);
        }
    };