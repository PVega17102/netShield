import React, { useEffect, useState } from 'react';
import { View, Alert, Text, Button, Pressable } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

import styles from './styles/video.module.css';

const Video = ({ route, navigation }) => {
    
    const { subjectQuestions, subjectName, videoID} = route.params;
    
    const [playing, setPlaying] = useState(false);
    
    const [continuar, setContinuar] = useState(false);
    
    const onStateChange = (state) => {
        if (state === 'ended') {
          setPlaying(false);
          setContinuar(true);
        }
        if (state !== 'playing') {
          setPlaying(false);
        }
    };
    return (
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
                </View>
                <View style={{display:`${continuar ? 'none' : 'flex'}`}}>
                    <View style={styles.displaycontainer}>
                        <Text style={styles.note}>Nota: Debes ver el curso completo para continuar.</Text>
                    </View>
                </View>
                <View style={{display:`${continuar ? 'flex' : 'none'}`}}>
                    <Pressable style={styles.displaycontainer} onPress={() => navigation.navigate('Quiz', {subjectQuestions: subjectQuestions, subjectName: subjectName, videoID: videoID})}>
                        <Text style={styles.note}>PRESIONA PARA CONTINUAR</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default Video
