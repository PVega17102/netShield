import { Button, Image, Text, View } from 'react-native';

import styles from './styles/start.module.css'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require('./img/netShield.png')}/> */}
      <Text style={styles.title}>Home</Text>
      <View style={styles.content}>
        <Text style={styles.description}>Tu entrada a la ciberseguridad. Aprende y protege datos con una experiencia flexible para principiantes y profesionales.</Text>
      </View>
      <View style={styles.button}>
        <Button title='COMENZAR' color={'#5D92B0'} onPress={() => navigation.navigate('Start')}/>
      </View>
    </View>
  )
}

export default Home
