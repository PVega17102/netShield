import { Image, Text, View, ScrollView, Linking, Pressable } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import { styles } from '../styles/infoandcomplaint-style';
import { useNavigation } from '@react-navigation/native';

//Open News
const openWebPage = (url) => {
  Linking.openURL(url)
    .catch((err) => console.error('An error occurred', err));
};

const cautionsList = [
  {
    name: "CIBERATAQUE"
  },
  {
    name: "ROBO DE IDENTIDAD PERSONAL"
  },
  {
    name: "CONTRASEÑAS"
  },
  {
    name: "ESTAFAS EN LINEA"
  },
  {
    name: "PHISHING"
  },
  {
    name: "ACTUALIZACIONES DE SOFTWARE"
  }
]

//Informative screen
const ComplaintModule = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.containerHorizontal}>
          <Image style={styles.logoHorizontal} source={require('../assets/img/netShield.png')}/>
          <Text style={styles.titleHorizontal}>Net Shield</Text>
        </View>


      <ScrollView style={styles.scrollContainer}>

        <View style={styles.stepsContainer}>

        {cautionsList.map((cautionsInfo, index)=>
              <Pressable key={index} style={styles.stepsToReport} onPress={() => navigation.navigate('CautionScreen', {name: cautionsInfo.name})}>
                <Text style={styles.stepText}>{cautionsInfo.name}</Text>
              </Pressable>
            )}
        </View>

        <View style={styles.viewImg}>
          <ReactNativeZoomableView
                    maxZoom={3}
                    minZoom={1}
                    zoomStep={0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    onZoomAfter={this.logOutZoomState}
                    >
                        <Image style={styles.alertImg} source={require('../assets/img/alertas.webp')}/>
          </ReactNativeZoomableView>
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.contactInstructions}>Para realizar reportes, denuncias, o solicitar apoyo comunícate a:</Text>
          <View style={styles.contactInfoContainer}>
            <Text style={styles.contactInfo} selectable={true}> 55 5242 5100 ext. 5086 </Text>
            <Text style={styles.contactInfo}>O envía un correo a:</Text>
            <Text style={styles.contactInfo} selectable={true}>policia.cibernetica@ssc.cdmx.gob.mx</Text>
          </View>


          <Text style={styles.contactInstructions}>Si deseas solicitar pláticas informativas de prevención comunícate a:</Text>
          <View style={styles.contactInfoContainer}>
            <Text style={styles.contactInfo} selectable={true}>55 5242 5100 ext. 5666 </Text>
            <Text style={styles.contactInfo}>O envía un correo a:</Text>
            <Text style={styles.contactInfo} selectable={true}>prevencion.cibernetica@ssc.cdmx.gob.mx</Text>
          </View>

          <Pressable
            style={styles.externalLink}
            onPress={() => openWebPage('https://www.gob.mx/gncertmx?tab=Reporta%20un%20delito%20cibernético')}>
          <Text style={styles.linkText}>Reportar a través de CERT-MX</Text></Pressable>
          <Pressable
            style={styles.externalLink}
            onPress={() => openWebPage('https://fgr.org.mx/swb/FGR/Contacto')}>
          <Text style={styles.linkText}>Contacto FGR por estado</Text></Pressable>
        </View>

      </ScrollView>
    </View>
  )
}

export default ComplaintModule
