import { Image, Text, View } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';


import { styles } from '../styles/infoandcomplaint-style'
import { useNavigation } from '@react-navigation/native';

const Infographic = ({ route }) => {

    const navigation = useNavigation();

    //Get route params to set image
    const { name } = route.params;

    const images = {
        'Actualizaciones Regulares de Software': require('../assets/img/actualizacionesReg.webp'),
        'Online Scamming': require('../assets/img/Estafaslinea.webp'),
        'Phishing': require('../assets/img/PhishingInfo.webp'),
        'Protección de Identidad Personal': require('../assets/img/identidadPers.webp'),
        'Strong Passwords': require('../assets/img/ContraseñasFuertes.webp'),
        'Protección Contra Ciberataques': require('../assets/img/cyberAtaques.webp')
    }


    return (
        <View style={styles.containerPad}>
            <View style={styles.containerHorizontal}>
                <Image style={styles.logoHorizontal} source={require('../assets/img/netShield.png')}/>
                <Text style={styles.titleHorizontal}>Net Shield</Text>
            </View>

            <View style={styles.containerImg}>
                <ReactNativeZoomableView
                maxZoom={3}
                minZoom={1}
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
