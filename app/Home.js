import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';

import styles from './styles/home.module.css'

const rec = Math.floor(Math.random() * 5);

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Pressable style={styles.videocard} onPress={()=>{console.log(courseList[rec].name)}}>
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
            <Pressable key={index} onPress={()=>{console.log(courseInfo.name)}}>
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
            <Pressable key={index} onPress={()=>{console.log(courseInfo.name)}}>
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
    name: 'Actualizaciones regulares de software',
    img: require('./img/update.png'),
    thumb: require('./img/thumb-update.png'),
  },
  {
    name: 'Online scamming',
    img: require('./img/scamming.png'),
    thumb: require('./img/thumb-update.png'),
  },
  {
    name: 'Phishing',
    img: require('./img/phishing.png'),
    thumb: require('./img/thumb-update.png'),
  },
  {
    name: 'Protección de identidad personal',
    img: require('./img/personal-identity-protection.png'),
    thumb: require('./img/thumb-update.png'),
  },
  {
    name: 'Strong passwords',
    img: require('./img/password.png'),
    thumb: require('./img/thumb-password.png'),
  },
  {
    name: 'Protección contra ciberataques',
    img: require('./img/hackers.png'),
    thumb: require('./img/thumb-update.png'),
  },
]