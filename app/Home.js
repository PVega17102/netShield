import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import styles from './styles/home.module.css'

const rec = Math.floor(Math.random() * 5);

const Home = ({ navigation }) => {

  const [userQuizInfo, setUserQuizInfo] = useState(null);
  const [courseList, setCourseList] = useState([]);


  const loadUserQuizInfo = async () => {
    try {
      const userQuizInfoLoad = await AsyncStorage.getItem('userQuizInfo');
      if (userQuizInfoLoad !== null) {
        const parsedUserQuizInfo = JSON.parse(userQuizInfoLoad);
        setUserQuizInfo(parsedUserQuizInfo);
      }
    } catch (error) {
      console.error('Error loading user quiz info:', error);
    }
  };

  useEffect(() => {
    loadUserQuizInfo();
  }, []);

  
  useEffect(() => {
    // Populate courseList with the completed status when userQuizInfo is available
    if (userQuizInfo) {
      const updatedCourseList = [
        {
          name: 'Actualizaciones Regulares de Software',
          img: require('./img/update.png'),
          thumb: require('./img/thumb-update.png'),
          subjectQuestions: 'updatingQuestions',
          videoID: 'AwQJGOnvrf0',
          completed: JSON.stringify(userQuizInfo.updatingStatus)
        },
        {
          name: 'Online Scamming',
          img: require('./img/scamming.png'),
          thumb: require('./img/thumb-scamming.png'),
          subjectQuestions: 'onlineScamQuizQuestions',
          videoID: 'tnKtD7gZZRA',
          completed: JSON.stringify(userQuizInfo.onlineScamStatus)
        },
        {
          name: 'Phishing',
          img: require('./img/phishing.png'),
          thumb: require('./img/thumb-phishing.png'),
          subjectQuestions: 'phishingQuestions',
          videoID: 'TVG_t2ExrXw',
          completed: JSON.stringify(userQuizInfo.phishingStatus)
        },
        {
          name: 'Protección de Identidad Personal',
          img: require('./img/personal-identity-protection.png'),
          thumb: require('./img/thumb-personal-identity-protection.png'),
          subjectQuestions: 'personalIdentityQuestions',
          videoID: '',
          completed: JSON.stringify(userQuizInfo.personalIdentityStatus)
        },
        {
          name: 'Strong Passwords',
          img: require('./img/password.png'),
          thumb: require('./img/thumb-password.png'),
          subjectQuestions: 'strongPasswordsQuestions',
          videoID: '3XzibObHQ5A',
          completed: JSON.stringify(userQuizInfo.strongPasswordsStatus)
        },
        {
          name: 'Protección Contra Ciberataques',
          img: require('./img/hackers.png'),
          thumb: require('./img/thumb-hackers.png'),
          subjectQuestions: 'cyberAtacksQuestions',
          videoID: 'uCPInNjj33U',
          completed: JSON.stringify(userQuizInfo.cyberAtacksStatus)
        },
      ]
    setCourseList(updatedCourseList);
  }
  }, [userQuizInfo]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Pressable style={styles.videocard} onPress={() => navigation.push('Video', {subjectQuestions: courseList[rec].subjectQuestions, subjectName: courseList[rec].name, videoID: courseList[rec].videoID})}>
      {courseList[rec] ? (
        <ImageBackground source={courseList[rec].thumb} borderRadius={10} style={styles.recommended}>
          <View style={styles.separation}>
            <View style={styles.videosubtitlecont}>
              <Text style={styles.videosubtitle}>Recomendado</Text>
            </View>
            <View style={styles.videoiconcont}>
              <Image style={styles.videoicon} source={courseList[rec].img}/>
            </View>
          </View>
        </ImageBackground>
        ) : null}
      </Pressable>
      <ScrollView style={styles.scrollY}>
        <View style={styles.section}>
          <Text style={styles.course}>Cursos</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {courseList.map((courseInfo, index)=>
            <Pressable key={index} onPress={() => navigation.push('Video', {subjectQuestions: courseInfo.subjectQuestions, subjectName: courseInfo.name, videoID: courseInfo.videoID})}>
              <View style={styles.card}>
                <View style={styles.imgcontainer}>
                  <Image source={courseInfo.img} style={styles.courseimage}/>
                </View>
                <Text style={styles.name}>{courseInfo.name}</Text>
                <Text>{courseInfo.completed}</Text>
              </View>
            </Pressable>
            )}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.course}>Tendencia</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {courseList.map((courseInfo, index)=>
            <Pressable key={index} onPress={() => navigation.push('Video', {subjectQuestions: courseInfo.subjectQuestions, subjectName: courseInfo.name, videoID: courseInfo.videoID})}>
              <View style={styles.card}>
                <View style={styles.imgcontainer}>
                  <Image source={courseInfo.img} style={styles.courseimage}/>
                </View>
                <Text style={styles.name}>{courseInfo.name}</Text>
              </View>
            </Pressable>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home