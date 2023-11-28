import { Button, Image, Text, View } from 'react-native';

import styles from './styles/infoandcomplaint.module.css'


const ComplaintModule = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHorizontal}>
        <Image style={styles.logoHorizontal} source={require('./img/netShield.png')}/>
        <Text style={styles.titleHorizontal}>Net Shield</Text>
      </View>


      <View>
        <Text style={styles.description}>Para realizar reportes, denuncias, o solicitar apoyo comunícate a: </Text>
      </View>
    </View>
  )
}

export default ComplaintModule
