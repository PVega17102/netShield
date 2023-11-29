// quizInfo.js
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializes user info to show courses status
export const initializeUserQuizInfo = async () => {
const initialUserQuizInfo = {
    cyberAtacksStatus: false,
    onlineScamStatus: false,
    personalIdentityStatus: false,
    phishingStatus: false,
    strongPasswordsStatus: false,
    updatingStatus: false,
};

// Check if userQuizInfo already exists in AsyncStorage
const existingUserQuizInfo = await AsyncStorage.getItem('userQuizInfo');

if (!existingUserQuizInfo) {
    // If userQuizInfo doesn't exist, store the initialUserQuizInfo
    await AsyncStorage.setItem('userQuizInfo', JSON.stringify(initialUserQuizInfo));
}
};