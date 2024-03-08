import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { getQuizAttempts } from '../quizzes/attempts';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MainScheme } from '../theme/mainTheme';
import {
    MD3LightTheme as DefaulTheme,
    PaperProvider,
    Button} from 'react-native-paper'; 

import { styles } from '../styles/video-styles';
import { useNavigation } from '@react-navigation/native';

const theme = {
    ...DefaulTheme,
    colors: MainScheme
}

const Video = ({ route }) => {

    const navigation = useNavigation();
    
    const { subjectQuestions, subjectName, videoID} = route.params;
    
    const [playing, setPlaying] = useState(false);
    
    const [continuar, setContinuar] = useState(false);
    
    const onStateChange = ( state ) => {
        if (state === 'ended') {
          setPlaying(false);
          setContinuar(true);
        }
        if (state !== 'playing') {
          setPlaying(false);
        }
    };

    //Manage attempts
    const [quizAttempts, setQuizAttempts] = useState(0);
    const [hasValidTries, sethasValidTries] = useState(false);

    useEffect(() => {
      // Load the quiz attempts count when the component mounts
        getQuizAttempts(subjectQuestions)
        .then((attempts) => {
            setQuizAttempts(attempts)
            const maxTries = 5;
            const hasValidTries = attempts < maxTries;
            sethasValidTries(hasValidTries)
        });
    }, [subjectQuestions]);

    //Check if the course is aproved
    const [quizCompleted, setQuizCompleted] = useState(false);

    
    useEffect(() => {
        const getSingleQuizStatus = async () => {
            try {
            const userQuizInfoLoad = await AsyncStorage.getItem('userQuizInfo');
        
            if (userQuizInfoLoad !== null) {
                const parsedInfo = JSON.parse(userQuizInfoLoad);
    
                const subjectMapping = {
                    'onlineScamQuizQuestions': 'onlineScamStatus',
                    'updatingQuestions': 'updatingStatus',
                    'phishingQuestions': 'phishingStatus',
                    'strongPasswordsQuestions': 'strongPasswordsStatus',
                    'personalIdentityQuestions': 'personalIdentityStatus',
                    'cyberAtacksQuestions': 'cyberAtacksStatus',
                    // Add more mappings as needed
                };
    
                const subject = subjectMapping[subjectQuestions] || ''; 
    
                const quizStatus = parsedInfo[subject];
    
                if (quizStatus !== undefined){
                    setQuizCompleted(quizStatus);
                } else{
                    console.error('Quiz information was not found!');
                }
    
            } else {
                console.log('userQuizInfo data not found');
            }
    
            } catch (error) {
                console.error('Error retrieving quiz status:', error);
            }
        };
        getSingleQuizStatus(subjectQuestions);
    }, []);
    
    return (
        <PaperProvider theme={theme}>
        <View style={styles.container}>
            <YoutubeIframe
                height={300}
                play={playing}
                videoId={videoID}
                onChangeState={onStateChange}
                initialPlayerParams={{controls: false}}
            />

            <View style={styles.content}>

                <View>
                    <Text style={styles.title}>{subjectName}</Text>
                    <Text style={styles.quiz_attempts}>Intentos: {quizAttempts}/5</Text>
                </View>
                


            {
                quizCompleted ? (
                    //If the user has aproved the quiz
                    <><View style={styles.course_completed}>
                    <Text style={styles.course_completed_message}>Has completado esta sección satisfactoriamente.</Text>
                    </View>
                    <Button
                        mode='contained'
                        theme={{roundness: 1}}
                        style={{backgroundColor: theme.colors.success}}
                        onPress={() => navigation.navigate('Home')}>
                    Continuar
                    </Button>
                    </>
                ) : (
                hasValidTries ? (
                    //If the user has lees than 5 attempts
                    <><View style={{ display: `${continuar ? 'none' : 'flex'}` }}>
                            <View style={styles.displaycontainer}>
                                <Text style={styles.note}>Nota: Debes ver el curso completo para continuar.</Text>
                            </View>
                        </View><View style={{ display: `${continuar ? 'flex' : 'none'}` }}>
                            <Pressable style={styles.displaycontainer} onPress={() => navigation.navigate('Quiz', { subjectQuestions: subjectQuestions, subjectName: subjectName, videoID: videoID })}>
                                <Text style={styles.note}>PRESIONA PARA CONTINUAR</Text>
                            </Pressable>
                        </View></>
                ) : 
                    //If the user has no more attempts
                    <View style={styles.displaycontainer}>
                        <Text style={styles.note_no_attempts}>Has agotado tus intentos para el quiz de esta sección.</Text>
                    </View>
                )
            }
            </View>
        </View>
        </PaperProvider>
    );
}

export default Video