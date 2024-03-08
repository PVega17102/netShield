import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'block',
    backgroundColor: '#5D92B0',
    alignItems: 'center',
    justifyContent: 'center',
    // justify-content: center no es una propiedad válida en React Native
    padding: 16,
  },
  title: {
    marginTop: 32, // 1.2rem
    fontWeight: '900',
    fontSize: 30,
    color: '#f4f5f6',
  },
  newsScroll: {
    marginTop: 16, // Ajuste para 1.6rem
    borderRadius: 20,
    backgroundColor: '#f4f5f6',
    width: '100%',
    // height: 70rem; // No se admite 'rem' en React Native
    height: 'auto', // Ajuste a una altura en píxeles
    display: 'flex',
    flexDirection: 'column',
    
  },
  newsScrollContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  newsCard: {
    backgroundColor: '#f5f5f5',
    marginVertical: 4, // Ajuste para 1.6rem
    padding: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5D92B0',
  },
  newsCardInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8, // Ajuste para 0.8rem
  },
  newsDate: {
    fontSize: 12,
  },
  newsType: {
    fontSize: 12,
  },
  newsTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  newsContent: {
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: 8, // Ajuste para 0.8rem
  },
  newsImage: {
    width: '100%',
    aspectRatio: '16/4',
    // height: 120, // Ajuste a una altura en píxeles
    borderRadius: 10,
  },
  scrollY: {
    marginTop: 16, // Ajuste para 3.2rem
    display: 'flex',
    backgroundColor: '#f4f5f6',
    height: 'auto',
    width: '100%',
    // position: 'absolute',
    // bottom: '0'
  },
  section: {
    marginTop: 16, // Ajuste para 1.6rem
    backgroundColor: '#f4f5f6',
    paddingHorizontal: 8,
    display: 'flex',
    height: 'auto',
    width: '100%',
    borderRadius: 20,
  },
  course: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 22,
    color: '#1d2d3d',
  },
  scrollX: {
    height: 'auto',
    paddingVertical: 10, // Ajuste para 1rem
    paddingHorizontal: 0,
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: 144, // Ajuste a una anchura en píxeles
  },
  imgcontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#dddddd',
    width: 128, // Ajuste a una anchura en píxeles
    height: 128, // Ajuste a una altura en píxeles
  },
  courseimage: {
    width: '90%',
    height: '90%',
  },
  name: {
    fontWeight: '600',
    fontSize: 13,
    color: '#1d2d3d',
    textAlign: 'center',
  },
  loader: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});