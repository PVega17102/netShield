import { Image, Pressable, ScrollView, Text, View, Linking, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles/threaths-styles'
import { useNavigation } from '@react-navigation/native';

//Open News
const openWebPage = (url) => {
  Linking.openURL(url)
    .catch((err) => console.error('An error occurred', err));
};


const ThreatAlerts = () => {

  const navigation = useNavigation();

  //SUFFLE ARRAY
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://si-szzt.onrender.com');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setNewsList(result.data);
        setLoading(false);
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
        {loading ? <ActivityIndicator size="large" color="#5D92B0" /> :
          newsList.map((newsInfo, index) =>
            <Pressable key={index} style={styles.newsCard} onPress={() => openWebPage(newsInfo.link)}>
              <Text style={styles.newsTitle}>{newsInfo.title}</Text>
              <Text style={styles.newsContent}>{newsInfo.description}</Text>
              <Image src={newsInfo.image_url} style={styles.newsImage} />
            </Pressable>
        )}
      </ScrollView>

      {/* Navigate to infographics according to the selected subject */}
      {/* <ScrollView style={styles.scrollY}> */}
        <View style={styles.section}>
          <Text style={styles.course}>Infografías</Text>
          <ScrollView horizontal={true} style={styles.scrollX}>
            {shuffleArray(infographicList).map((Info, index) =>
            <Pressable key={index} onPress={() => navigation.navigate('Infographic', {name: Info.name})}>
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
      {/* </ScrollView> */}
    </View>
  )
}

export default ThreatAlerts


const infographicList = [
  {
    name: 'Actualizaciones Regulares de Software',
    img: require('../assets/img/update.webp'),
    thumb: require('../assets/img/thumb-update.webp'),
  },
  {
    name: 'Online Scamming',
    img: require('../assets/img/scamming.webp'),
    thumb: require('../assets/img/thumb-scamming.webp'),
  },
  {
    name: 'Phishing',
    img: require('../assets/img/phishing.webp'),
    thumb: require('../assets/img/thumb-phishing.webp'),
  },
  {
    name: 'Protección de Identidad Personal',
    img: require('../assets/img/personal-identity-protection.webp'),
    thumb: require('../assets/img/thumb-personal-identity-protection.webp'),
  },
  {
    name: 'Strong Passwords',
    img: require('../assets/img/password.webp'),
    thumb: require('../assets/img/thumb-password.webp'),
  },
  {
    name: 'Protección Contra Ciberataques',
    img: require('../assets/img/hackers.webp'),
    thumb: require('../assets/img/thumb-hackers.webp'),
  },
]