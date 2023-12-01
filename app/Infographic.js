import { Image, Text, View } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';


import styles from './styles/infoandcomplaint.module.css'

const Infographic = ({ route, navigation }) => {

    //Get route params to set image
    const { name } = route.params;

    const images = {
        'Actualizaciones Regulares de Software': require('./img/actualizacionesReg.png'),
        'Online Scamming': require('./img/Estafaslinea.png'),
        'Phishing': require('./img/PhishingInfo.png'),
        'Protección de Identidad Personal': require('./img/identidadPers.png'),
        'Strong Passwords': require('./img/ContraseñasFuertes.png'),
        'Protección Contra Ciberataques': require('./img/cyberAtaques.png')
    }


    return (
        <View style={styles.containerPad}>
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
