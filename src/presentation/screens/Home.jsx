import { ActivityIndicator, Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

import { styles } from '../styles/home-style'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  
  const navigation = useNavigation();
  
  const [userQuizInfo, setUserQuizInfo] = useState(null);
  const [courseList, setCourseList] = useState([]);
  
  const [random, setRandom] = useState(0);

  
  useEffect(() => {
    //Load user quiz info from local storage
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
    loadUserQuizInfo();
  }, []);

  
  useEffect(() => {
    // Populate courseList with the completed status when userQuizInfo is available
    if (userQuizInfo) {
      const updatedCourseList = [
        {
          name: 'Actualizaciones Regulares de Software',
          img: require('../assets/img/update.webp'),
          thumb: require('../assets/img/thumb-update.webp'),
          subjectQuestions: 'updatingQuestions',
          videoID: 'AwQJGOnvrf0',
          completed: JSON.stringify(userQuizInfo.updatingStatus)
        },
        {
          name: 'Online Scamming',
          img: require('../assets/img/scamming.webp'),
          thumb: require('../assets/img/thumb-scamming.webp'),
          subjectQuestions: 'onlineScamQuizQuestions',
          videoID: 'tnKtD7gZZRA',
          completed: JSON.stringify(userQuizInfo.onlineScamStatus)
        },
        {
          name: 'Phishing',
          img: require('../assets/img/phishing.webp'),
          thumb: require('../assets/img/thumb-phishing.webp'),
          subjectQuestions: 'phishingQuestions',
          videoID: 'TVG_t2ExrXw',
          completed: JSON.stringify(userQuizInfo.phishingStatus)
        },
        {
          name: 'Protección de Identidad Personal',
          img: require('../assets/img/personal-identity-protection.webp'),
          thumb: require('../assets/img/thumb-personal-identity-protection.webp'),
          subjectQuestions: 'personalIdentityQuestions',
          videoID: 'M-ig1Ct68aw',
          completed: JSON.stringify(userQuizInfo.personalIdentityStatus)
        },
        {
          name: 'Strong Passwords',
          img: require('../assets/img/password.webp'),
          thumb: require('../assets/img/thumb-password.webp'),
          subjectQuestions: 'strongPasswordsQuestions',
          videoID: '3XzibObHQ5A',
          completed: JSON.stringify(userQuizInfo.strongPasswordsStatus)
        },
        {
          name: 'Protección Contra Ciberataques',
          img: require('../assets/img/hackers.webp'),
          thumb: require('../assets/img/thumb-hackers.webp'),
          subjectQuestions: 'cyberAtacksQuestions',
          videoID: 'uCPInNjj33U',
          completed: JSON.stringify(userQuizInfo.cyberAtacksStatus)
        },
      ]
      setCourseList(updatedCourseList);

      const randomIndex = Math.floor(Math.random() * updatedCourseList.length);
      setRandom(randomIndex);
    }
  }, [userQuizInfo]);

  //SUFFLE ARRAY
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      {/* {courseList[random] ? ( */}
      <Pressable style={styles.videocard} onPress={() => navigation.navigate('Video', { subjectQuestions:'phishingQuestions', subjectName:'Phishing', videoID:'TVG_t2ExrXw' })}>
        <ImageBackground source={require('../assets/img/thumb-phishing.webp')} borderRadius={10} style={styles.recommended}>
          <View style={styles.separation}>
            <View style={styles.videosubtitlecont}>
              <Text style={styles.videosubtitle}>Recomendado</Text>
            </View>
            <View style={styles.videoiconcont}>
              <Image style={styles.videoicon} source={require('../assets/img/phishing.webp')}/>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
      {/* ) : <ActivityIndicator size="large" color="#f4f5f6" />} */}
      <ScrollView style={styles.scrollY}>
        <View style={styles.section}>
          <Text style={styles.course}>Cursos</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {courseList.map((courseInfo, index)=>
            <Pressable key={index} onPress={() => navigation.navigate('Video', {subjectQuestions: courseInfo.subjectQuestions, subjectName: courseInfo.name, videoID: courseInfo.videoID})}>
              <View style={styles.card}>
                <View style={styles.imgcontainer}>
                  <Image source={courseInfo.img} style={styles.courseimage}/>
                  
                  {/* BADGE GENERATION HERE  */}
                  <Text style={courseInfo.completed === 'true' ? styles.statusDone : styles.statusIncomplete} >{courseInfo.completed === 'true' ? 'Aprobado' : 'No finalizado'}</Text>
                  {courseInfo.completed === 'true' ? ( <Image source={require("../assets/img/badge.webp")} style={styles.badge}></Image> ) :null}

                </View>
                <Text style={styles.name}>{courseInfo.name}</Text>
              </View>
            </Pressable>
            )}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.course}>Tendencia</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {shuffleArray(courseList).map((courseInfo, index)=>
            <Pressable key={index} onPress={() => navigation.navigate('Video', {subjectQuestions: courseInfo.subjectQuestions, subjectName: courseInfo.name, videoID: courseInfo.videoID})}>
              <View style={styles.card}>
                <View style={styles.imgcontainer}>
                  <Image source={courseInfo.img} style={styles.courseimage}/>

                  {/* BADGE GENERATION HERE  */}
                  <Text style={courseInfo.completed === 'true' ? styles.statusDone : styles.statusIncomplete} >{courseInfo.completed === 'true' ? 'Aprobado' : 'No finalizado'}</Text>
                  {courseInfo.completed === 'true' ? ( <Image source={require("../assets/img/badge.webp")} style={styles.badge}></Image> ) :null}

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