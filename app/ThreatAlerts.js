import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

import styles from './styles/threaths.module.css'

const rec = Math.floor(Math.random() * 5);

const ThreatAlerts = ({ navigation }) => {

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
      <Text style={styles.title}>Alerta de Amenazas</Text>
      <Pressable style={styles.newscard} onPress={() => navigation.push('Infographic', {name: infographicList[rec].name})}>
      <Text>Poner noticias aqi</Text>
      </Pressable>
      <ScrollView style={styles.scrollY}>
      <View style={styles.section}>
          <Text style={styles.course}>Tendencia</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {shuffleArray(infographicList).map((Info, index)=>
            <Pressable key={index} onPress={() => navigation.push('Infographic', {name: Info.name})}>
              <View style={styles.card}>
                <View style={styles.imgcontainer}>
                  <Image source={Info.img} style={styles.courseimage}/>
                </View>
                <Text style={styles.name}>{Info.name}</Text>
              </View>
            </Pressable>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export default ThreatAlerts


const infographicList = [
  {
    name: 'Actualizaciones Regulares de Software',
    img: require('./img/update.png'),
    thumb: require('./img/thumb-update.png'),
  },
  {
    name: 'Online Scamming',
    img: require('./img/scamming.png'),
    thumb: require('./img/thumb-scamming.png'),
  },
  {
    name: 'Phishing',
    img: require('./img/phishing.png'),
    thumb: require('./img/thumb-phishing.png'),
  },
  {
    name: 'Protección de Identidad Personal',
    img: require('./img/personal-identity-protection.png'),
    thumb: require('./img/thumb-personal-identity-protection.png'),
  },
  {
    name: 'Strong Passwords',
    img: require('./img/password.png'),
    thumb: require('./img/thumb-password.png'),
  },
  {
    name: 'Protección Contra Ciberataques',
    img: require('./img/hackers.png'),
    thumb: require('./img/thumb-hackers.png'),
  },
]