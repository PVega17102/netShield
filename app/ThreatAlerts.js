import { Image, Pressable, ScrollView, Text, View, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles/threaths.module.css'

//Open News
const openWebPage = (url) => {
  Linking.openURL(url)
    .catch((err) => console.error('An error occurred', err));
};


const ThreatAlerts = ({ navigation }) => {

  //SUFFLE ARRAY
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://si-szzt.onrender.com');
        setNewsList(result.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerta de Amenazas</Text>

      {/* SHOW NEWS HERE */}
      <ScrollView style={styles.newsScroll} contentContainerStyle={styles.newsScrollContainer}>
        {newsList.map((newsInfo, index) =>
            <Pressable key={index} style={styles.newsCard} onPress={() => openWebPage(newsInfo.link)}>
              <Text style={styles.newsTitle}>{newsInfo.title}</Text>
              <Text style={styles.newsContent}>{newsInfo.description}</Text>
              <Image src={newsInfo.image_url} style={styles.newsImage} />
            </Pressable>
        )}
      </ScrollView>

      {/* Navigate to infographics according to the selected subject */}
      <ScrollView style={styles.scrollY}>
      <View style={styles.section}>
          <Text style={styles.course}>Infografías</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {shuffleArray(infographicList).map((Info, index) =>
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