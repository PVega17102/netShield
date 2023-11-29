import { Image, Text, View, ScrollView, Linking } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import styles from './styles/infoandcomplaint.module.css'
import { Button } from 'react-native-paper';

//Open News
const openWebPage = (url) => {
  Linking.openURL(url)
    .catch((err) => console.error('An error occurred', err));
};


//Informative screen
const ComplaintModule = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerHorizontal}>
          <Image style={styles.logoHorizontal} source={require('./img/netShield.png')}/>
          <Text style={styles.titleHorizontal}>Net Shield</Text>
        </View>


      <ScrollView style={styles.scrollContainer}>

        <View style={styles.stepsContainer}>
          <View style={styles.stepsToReport}><Text style={styles.stepText}>1: Identificar el delito cibernético</Text></View>
          <View style={styles.stepsToReport}><Text style={styles.stepText}>2: Reúne evidencia</Text></View>

          <View style={styles.stepsToReport}><Text style={styles.stepText}>3: Accede al portal en línea</Text></View>
          <View style={styles.stepsToReport}><Text style={styles.stepText}>4: Completa el formulario de denuncia</Text></View>

          <View style={styles.stepsToReport}><Text style={styles.stepText}>5: Adjunta la evidencia</Text></View>
          <View style={styles.stepsToReport}><Text style={styles.stepText}>6: Revisa y envía la denuncia</Text></View>

          <View style={styles.stepsToReport}><Text style={styles.stepText}>7: Contacta a las autoridades por teléfono (opcional)</Text></View>
          <View style={styles.stepsToReport}><Text style={styles.stepText}>8: Sigue las instrucciones de las autoridades</Text></View>
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.contactInstructions}>Para realizar reportes, denuncias, o solicitar apoyo comunícate a:</Text>
          <View style={styles.contactInfoContainer}>
            <Text style={styles.contactInfo} selectable={true}> 55 5242 5100 ext. 5086 </Text>
            <Text style={styles.contactInfo}>O envía un correo a:</Text>
            <Text style={styles.contactInfo} selectable={true}>policia.cibernetica@ssc.cdmx.gob.mx</Text>
          </View>


          <Text style={styles.contactInstructions}>Si deseas solicitar platicas informativas de prevención comunícate a:</Text>
          <View style={styles.contactInfoContainer}>
            <Text style={styles.contactInfo} selectable={true}>55 5242 5100 ext. 5666 </Text>
            <Text style={styles.contactInfo}>O envía un correo a:</Text>
            <Text style={styles.contactInfo} selectable={true}>prevencion.cibernetica@ssc.cdmx.gob.mx</Text>
          </View>

          <Button 
            mode='contained'
            theme={{roundness: 1}}
            textColor='#fff'
            style={styles.externalLink}
            onPress={() => openWebPage('https://www.gob.mx/gncertmx?tab=Reporta%20un%20delito%20cibernético')}>
          Reportar a través de CERT-MX</Button>

          <Button 
            mode='contained'
            theme={{roundness: 1}}
            textColor='#fff'
            style={styles.externalLink}
            onPress={() => openWebPage('https://fgr.org.mx/swb/FGR/Contacto')}>
          Contacto FGR por estado</Button>

        </View>

        <View style={styles.viewImg}>
          <ReactNativeZoomableView
                    maxZoom={3}
                    minZoom={0.9}
                    zoomStep={0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    onZoomAfter={this.logOutZoomState}
                    >
                        <Image style={styles.alertImg} source={require('./img/alertas.jpg')}/>
          </ReactNativeZoomableView>
        </View>
      </ScrollView>
    </View>
  )
}

export default ComplaintModule
