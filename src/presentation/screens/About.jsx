import { Image, Text, View, ScrollView, Linking, Pressable } from 'react-native';

import { styles } from '../styles/about-styles'
import { useNavigation } from '@react-navigation/native';

//Open News
const openWebPage = (url) => {
  Linking.openURL(url)
    .catch((err) => console.error('An error occurred', err));
};

const team = [
  {
    name: 'Luis Fernando Cabral Tamayo',
    img: require('../assets/img/devLuis.webp'),
    desc: 'Desarrollador Back-End',
    link: 'https://www.linkedin.com/in/luis-fernando-cabral-b13847220/'
  },
  {
    name: 'José Arturo Claudio Barrios',
    img: require('../assets/img/devArturo.webp'),
    desc: 'Desarrollador Full-Stack',
    link: 'https://www.linkedin.com/in/sweng1josearturocb/'
  },
  {
    name: 'Esteban Pereda Soria',
    img: require('../assets/img/devEsteban.webp'),
    desc: 'Diseñador UI/UX',
    link: 'https://www.linkedin.com/in/esteban-pereda-78396621b/'
  },
  {
    name: 'Paul Obed Vega Soto',
    img: require('../assets/img/devPaul.webp'),
    desc: 'Desarrollador Full-Stack',
    link: 'https://www.linkedin.com/in/swobedvega/'
  }
]

//Informative screen
const About = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHorizontal}>
        <Image style={styles.logoHorizontal} source={require('../assets/img/netShield.png')}/>
        <Text style={styles.titleHorizontal}>Net Shield</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>

        <View style={styles.contactContainer}>
          <Text style={styles.description}>Bienvenido/a a Net Shield, tu compañero en la concientización sobre ciberseguridad. Net Shield es una aplicación escolar diseñada para educar y empoderar a los usuarios en la prevención de amenazas cibernéticas. Explora nuestra aplicación para descubrir consejos prácticos y recursos educativos que te ayudarán a fortalecer tu seguridad en línea.</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Misión:</Text>
            <Text style={styles.infoDesc}>Brindar conocimientos esenciales sobre ciberseguridad de manera accesible y práctica, fomentando la adopción de buenas prácticas en línea. Nuestra misión es capacitar a los usuarios, desde estudiantes hasta profesionales, para que naveguen por la red de manera segura y protejan su información personal en un mundo digital en constante cambio.</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Objetivos:</Text>
            <Text style={styles.infoDesc}>1. Educar: Proporcionar información clara y comprensible sobre las amenazas cibernéticas, desde el phishing hasta el malware, para que los usuarios puedan identificar y evitar posibles riesgos.</Text>
            <Text style={styles.infoDesc}>2. Concientizar: Sensibilizar a la comunidad sobre la importancia de la ciberseguridad, destacando las consecuencias de no proteger adecuadamente la información en línea.</Text>
            <Text style={styles.infoDesc}>3. Empoderar: Ofrecer herramientas y recursos interactivos que permitan a los usuarios practicar y mejorar sus habilidades en la protección contra amenazas cibernéticas.</Text>
            <Text style={styles.infoDesc}>4. Colaborar: Fomentar la colaboración y el intercambio de conocimientos en el ámbito de la ciberseguridad, creando una comunidad comprometida con la seguridad en línea.</Text>
            <Text style={styles.infoDesc}>5. Adaptación Continua: Mantenernos actualizados con las últimas tendencias y amenazas cibernéticas para proporcionar información relevante y actualizada a nuestros usuarios. Regularmente actualizaremos la aplicación para abordar nuevas preocupaciones de seguridad y mejorar la experiencia del usuario.</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Equipo de desarrollo:</Text>
            {team.map((int, index)=>
              <View key={index} style={styles.card} onPress={() => navigation.navigate('CautionScreen', {name: cautionsInfo.name})}>
                <Image style={styles.cardImg} source={int.img}/>
                <View style={styles.cardCont}>
                  <Text style={styles.cardName}>{int.name}</Text>
                  <Text style={styles.cardDes}>{int.desc}</Text>
                  <Pressable onPress={() => openWebPage(int.link)}>
                    <Text style={styles.cardLink}>LinkedIn</Text></Pressable>
                </View>
              </View>
            )}
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default About
