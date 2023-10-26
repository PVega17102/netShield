import { Button, Image, Pressable, ScrollView, Text, View } from 'react-native';

import styles from './styles/home.module.css'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require('./img/netShield.png')}/> */}
      <Text style={styles.title}>Home</Text>
      <View style={styles.videocard}>

      </View>
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
  },
  {
    name: 'Online scamming',
    img: require('./img/scamming.png'),
  },
  {
    name: 'Phishing',
    img: require('./img/phishing.png'),
  },
  {
    name: 'Protección de identidad personal',
    img: require('./img/personal-identity-protection.png'),
  },
  {
    name: 'Contraseñas fuertes',
    img: require('./img/password.png'),
  },
  {
    name: 'Protección contra ciberataques',
    img: require('./img/hackers.png'),
  },
]