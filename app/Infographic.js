import { Image, Text, View } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';


import styles from './styles/start.module.css'

const Infographic = ({ route, navigation }) => {

    const { name } = route.params;

    const images = {
        'Actualizaciones Regulares de Software': 'swUpdatesInfo.jpg',
        'Online Scamming': require('./img/onlineScamInfo.png'),
        'Phishing': 'phishingInfo.jpg',
        'Protección de Identidad Personal': 'persIdentityInfo.jpg',
        'Strong Passwords': 'strongPassInfo.jpg',
        'Protección Contra Ciberataques': 'cyberAtacksInfo.jpg'
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerHorizontal}>
                <Image style={styles.logoHorizontal} source={require('./img/netShield.png')}/>
                <Text style={styles.titleHorizontal}>Net Shield</Text>
            </View>

            <View style={styles.containerImg}>
            <ReactNativeZoomableView
                maxZoom={3}
                minZoom={0.9}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                onZoomAfter={this.logOutZoomState}
                >
                    <Image style={styles.infoImg} source={images[name]} resizeMode="contain"/>
                </ReactNativeZoomableView>
            </View>

        </View>
    )
}

export default Infographic
