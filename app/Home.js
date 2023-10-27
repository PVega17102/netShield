import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';

import styles from './styles/home.module.css'

const rec = Math.floor(Math.random() * 5);

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Pressable style={styles.videocard} onPress={() => navigation.navigate('Video', {subjectQuestions: courseList[rec].subjectQuestions, subjectName: courseList[rec].name, videoID: courseList[rec].videoID})}>
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
      </Pressable>
      <ScrollView style={styles.scrollY}>
        <View style={styles.section}>
          <Text style={styles.course}>Cursos</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {courseList.map((courseInfo, index)=>
            <Pressable key={index} onPress={() => navigation.navigate('Video', {subjectQuestions: courseInfo.subjectQuestions, subjectName: courseInfo.name, videoID: courseInfo.videoID})}>
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
        <View style={styles.section}>
          <Text style={styles.course}>Tendencia</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {courseList.map((courseInfo, index)=>
            <Pressable key={index} onPress={() => navigation.navigate('Video', {subjectQuestions: courseInfo.subjectQuestions, subjectName: courseInfo.name, videoID: courseInfo.videoID})}>
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

const courseList = [
  {
    name: 'Actualizaciones Regulares de Software',
    img: require('./img/update.png'),
    thumb: require('./img/thumb-update.png'),
    subjectQuestions: 'updatingQuestions',
    videoID: 'AwQJGOnvrf0'
  },
  {
    name: 'Online Scamming',
    img: require('./img/scamming.png'),
    thumb: require('./img/thumb-update.png'),
    subjectQuestions: 'onlineScamQuizQuestions',
    videoID: ''
  },
  {
    name: 'Phishing',
    img: require('./img/phishing.png'),
    thumb: require('./img/thumb-update.png'),
    subjectQuestions: 'phishingQuestions',
    videoID: 'TVG_t2ExrXw'
  },
  {
    name: 'Protección de Identidad Personal',
    img: require('./img/personal-identity-protection.png'),
    thumb: require('./img/thumb-update.png'),
    subjectQuestions: '',
    videoID: ''
  },
  {
    name: 'Strong Passwords',
    img: require('./img/password.png'),
    thumb: require('./img/thumb-password.png'),
    subjectQuestions: '',
    videoID: '3XzibObHQ5A'
  },
  {
    name: 'Protección Contra Ciberataques',
    img: require('./img/hackers.png'),
    thumb: require('./img/thumb-hackers.png'),
    subjectQuestions: 'cyberAtacksQuestions',
    videoID: 'uCPInNjj33U'
  },
]